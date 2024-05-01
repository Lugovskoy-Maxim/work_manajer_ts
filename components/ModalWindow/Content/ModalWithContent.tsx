import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalWithWaybill from "./ModalWithWaybill";
import { Waybill} from "@/types/waybill";

export default function ModalWithContent() {
  const dispatch = useDispatch();
  const { id, type, isOpen } = useSelector(
    (state: RootState) => state.modalContent
  );

  const waybills = useSelector((state: RootState) => state.waybills.waybills);
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const organizations = useSelector((state: RootState) => state.organizations.organizations);
  const user = useSelector((state: RootState) => state.users.users);
  const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);

  function findDataWaybillById(id: string, data: Waybill[]) {
    if (!data) return undefined; 
    return data.find(item => item.id === id);
  }

  let content = null;

  switch (type) {
    case 'waybill':
      const waybill = findDataWaybillById(id, waybills);
      content = waybill ? <ModalWithWaybill waybill={waybill} /> : null;
      break;
    // case 'driver':
    //   const driver = findDataById(id, drivers);
    //   content = driver ? <ModalWithDriver driver={driver} /> : null;
    //   break;
    // case 'organization':
    //   const organization = findDataById(id, organizations);
    //   content = organization ? <ModalWithOrganization organization={organization} /> : null;
    //   break;
    default:
      break;
  }

  return <div>{content}</div>;
}

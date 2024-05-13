import { RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector }  from "react-redux";
import ModalWithWaybill from "./Waybill/ModalWithWaybill";
import ModalWithDriver from "./Driver/ModalWithDriver";
import { Waybill} from "@/types/waybill";
import { Driver } from "@/types/driver";
import { Address } from "@/types/address";
import { User } from "@/types/user";
import { Organization } from "@/types/organization";
import ModalWithUser from "./User/ModalWithUser";

export default function ModalWithContent() {
  const dispatch = useDispatch();
  const { id, type, isOpen } = useSelector(
    (state: RootState) => state.modalContent
  );

  const waybills = useSelector((state: RootState) => state.waybills.waybills);
  const drivers = useSelector((state: RootState) => state.drivers.drivers);
  const organizations = useSelector((state: RootState) => state.organizations.organizations);
  const users = useSelector((state: RootState) => state.users.users);
  const vehicles = useSelector((state: RootState) => state.vehicles.vehicles);
  const address = useSelector((state: RootState) => state.address.address);

  // const findDriverById =(driverId: string): Driver | undefined => {
  //   return drivers.find((driver) => driver.id === driverId);
  // };

  function findDataWaybillById(waybillId: string): Waybill | undefined{
    return waybills.find(waybill => waybill.id === waybillId);
  }
  // const waybill = findDataWaybillById(id, waybills);
  function findDataDriverById(driverId: string): Driver | undefined {
    return drivers.find((driver) => driver.id === driverId);
  };
  function findDataAddressById(addressId: string): Address | undefined {
    return address.find((address) => address.id === addressId);
  };
  function findDataOwnerById(userId: string): User | undefined {
    return users.find((user) => user.id === userId);
  };
  function findDataOrganizationById(organizationId: string): Organization | undefined {
    return organizations.find((organization) => organization.id === organizationId);
  };

  let content = null;

  switch (type) {
    case 'waybill':
      const waybill = findDataWaybillById(id);
      content = waybill ? <ModalWithWaybill waybill={waybill} /> : null;
      break;
    case 'driver':
      const driver = findDataDriverById(id);
      content = driver ? <ModalWithDriver driver={driver} /> : null;
      break;
    case 'user':
      const user = findDataOwnerById(id);
      content = user ? <ModalWithUser user={user} /> : null;
      break;
    // case 'organization':
    //   const organization = findDataOrganizationById(id);
    //   content = driver ? <ModalWithDriver driver={driver} /> : null;
    //   break;
    default:
      break;
  }

  return <div>{content}</div>;
}

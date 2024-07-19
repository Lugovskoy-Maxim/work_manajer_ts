import { Address } from "@/types/address";
import styles from './withAddress.module.scss';
  
  interface AddressProps {
    address: Address;
  }

  const ModalWithAddress: React.FC<AddressProps> = ({ address }) => {
    return (
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h5 className={styles.modal_title}>Информация о направлении</h5>
        </div>
        <div className={styles.modal_body}>

          {address.name && (
            <p>
              <strong>Название:</strong> {address.name}
            </p>
          )}
          <p>
            <strong>Город:</strong> {address.city}
          </p>
          {address.street && (
            <p>
              <strong>Улица:</strong> {address.street}
            </p>
          )}
          {address.streetNumber && (
            <p>
              <strong>Номер дома(здания):</strong> {address.streetNumber}
            </p>
          )}
          {address.apartmentNumber && (
            <p>
              <strong>Офис:</strong> {address.apartmentNumber}
            </p>
          )}
          {address.map && (
            <p>
              <strong>Геолокация:</strong> {address.map}
            </p>
          )}
          {address.postalCode && (
            <p>
              <strong>Почтовый индекс:</strong> {address.postalCode}
            </p>
          )}
          {address.floor && (
            <p>
              <strong>Комната:</strong> {address.floor}
            </p>
          )}
          {address.entrance && (
            <p>
              <strong>Вход:</strong> {address.entrance}
            </p>
          )}
          {address.buildingNumber && (
            <p>
              <strong>Корпус:</strong> {address.buildingNumber}
            </p>
          )}
          {address.region && (
            <p>
              <strong>Регион:</strong> {address.region}
            </p>
          )}
          <p>
            <strong>Страна:</strong> {address.country}
          </p>
          {/* {address.countryCode && (
            <p>
              <strong>Country Code:</strong> {address.countryCode}
            </p>
          )} */}
          {address.phone && (
            <p>
              <strong>Номер телефона:</strong> {address.phone}
            </p>
          )}
          {address.email && (
            <p>
              <strong>Почта:</strong> {address.email}
            </p>
          )}
        </div>
        <div className={styles.modal_footer}>
        <p>
            <strong>Автор:</strong> {address.owner}
          </p>
        <p>
            <strong>ID:</strong> {address.id}
          </p>
        </div>
      </div>
    );
  };
  
  export default ModalWithAddress;
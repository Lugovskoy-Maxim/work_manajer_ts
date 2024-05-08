const mokeWaybill = [
  {
    id: "1",
    waybill_number: "0123",
    address: "Улица Путина 1",
    date: "2024-05-01",
    status: "Закрыт",
    drivers: { id: "drv1", name: "Иванов Иван", working_shift: 1 },
    vehicles: {
      id: "wb1",
    },
    organizations: {
      id: "org1",
    },
    owner: "Диспетчер 1",
  },
  {
    id: "2",
    waybill_number: "0456",
    address: "Улица Ленина 2",
    date: "2024-05-02",
    status: "Открыт",
    drivers: { id: "drv2", name: "Петров Петр", working_shift: 2 },
    vehicles: {
      id: "wb2",
      reg_number: "456XYZ",
      type: "автобус",
      brand: "ПАЗ",
      body_value: 30,
      fuel: 40,
    },
    organizations: {
      id: "org2",
      name: "Организация 2",
      inn: "0987654321",
      drivers: [{ id: "drv2", name: "Петров Петр", working_shift: 2 }],
      vehicles: [
        {
          id: "wb2",
          reg_number: "456XYZ",
          type: "автобус",
          brand: "ПАЗ",
          body_value: 30,
          fuel: 40,
        },
      ],
      owner: "Диспетчер 2",
    },
    owner: "Диспетчер 2",
  },
  {
    id: "3",
    waybill_number: "0789",
    address: "Улица Гагарина 3",
    date: "2024-05-03",
    status: "Закрыт",
    drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
    vehicles: {
      id: "wb3",
      reg_number: "789DEF",
      type: "грузовик",
      brand: "КАМАЗ",
      body_value: 60,
      fuel: 80,
    },
    organizations: {
      id: "org3",
      name: "Организация 3",
      inn: "5432109876",
      drivers: [{ id: "drv3", name: "Сидоров Сидор", working_shift: 1 }],
      vehicles: [
        {
          id: "wb3",
          reg_number: "789DEF",
          type: "грузовик",
          brand: "КАМАЗ",
          body_value: 60,
          fuel: 80,
        },
      ],
      owner: "Диспетчер 3",
    },
    owner: "Диспетчер 3",
  },
  {
    id: "4",
    waybill_number: "0101112",
    address: "Улица Кирова 4",
    date: "2024-05-04",
    status: "Открыт",
    drivers: { id: "drv4", name: "Павлов Павел", working_shift: 2 },
    vehicles: {
      id: "wb4",
      reg_number: "101112GHI",
      type: "грузовик",
      brand: "MAN",
      body_value: 70,
      fuel: 90,
    },
    organizations: {
      id: "org4",
      name: "Организация 4",
      inn: "1357924680",
      drivers: [{ id: "drv4", name: "Павлов Павел", working_shift: 2 }],
      vehicles: [
        {
          id: "wb4",
          reg_number: "101112GHI",
          type: "грузовик",
          brand: "MAN",
          body_value: 70,
          fuel: 90,
        },
      ],
      owner: "Диспетчер 4",
    },
    owner: "Диспетчер 4",
  },
  {
    id: "5",
    waybill_number: "0131415",
    address: "Улица Сталина 5",
    date: "2024-05-05",
    status: "Закрыт",
    drivers: { id: "drv5", name: "Федоров Федор", working_shift: 1 },
    vehicles: {
      id: "wb5",
      reg_number: "131415JKL",
      type: "автобус",
      brand: "ЛиАЗ",
      body_value: 40,
      fuel: 50,
    },
    organizations: {
      id: "org5",
      name: "Организация 5",
      inn: "9876543210",
      drivers: [{ id: "drv5", name: "Федоров Федор", working_shift: 1 }],
      vehicles: [
        {
          id: "wb5",
          reg_number: "131415JKL",
          type: "автобус",
          brand: "ЛиАЗ",
          body_value: 40,
          fuel: 50,
        },
      ],
      owner: "Диспетчер 5",
    },
    owner: "Диспетчер 5",
  },
  {
    id: "6",
    waybill_number: "0161718",
    address: "Улица Жукова 6",
    date: "2024-05-06",
    status: "Открыт",
    drivers: { id: "drv6", name: "Николаев Николай", working_shift: 2 },
    vehicles: {
      id: "wb6",
      reg_number: "161718MNO",
      type: "грузовик",
      brand: "Volvo",
      body_value: 80,
      fuel: 100,
    },
    organizations: {
      id: "org6",
      name: "Организация 6",
      inn: "0246813579",
      drivers: [{ id: "drv6", name: "Николаев Николай", working_shift: 2 }],
      vehicles: [
        {
          id: "wb6",
          reg_number: "161718MNO",
          type: "грузовик",
          brand: "Volvo",
          body_value: 80,
          fuel: 100,
        },
      ],
      owner: "Диспетчер 6",
    },
    owner: "Диспетчер 6",
  },
  {
    id: "7",
    waybill_number: "0192021",
    address: "Улица Космонавтов 7",
    date: "2024-05-07",
    status: "Закрыт",
    drivers: { id: "drv7", name: "Григорьев Григорий", working_shift: 1 },
    vehicles: {
      id: "wb7",
      reg_number: "192021PQR",
      type: "грузовик",
      brand: "Scania",
      body_value: 90,
      fuel: 110,
    },
    organizations: {
      id: "org7",
      name: "Организация 7",
      inn: "1357924680",
      drivers: [{ id: "drv7", name: "Григорьев Григорий", working_shift: 1 }],
      vehicles: [
        {
          id: "wb7",
          reg_number: "192021PQR",
          type: "грузовик",
          brand: "Scania",
          body_value: 90,
          fuel: 110,
        },
      ],
      owner: "Диспетчер 7",
    },
    owner: "Диспетчер 7",
  },
  {
    id: "8",
    waybill_number: "0222324",
    address: "Улица Ленинградская 8",
    date: "2024-05-08",
    status: "Открыт",
    drivers: { id: "drv8", name: "Александров Александр", working_shift: 2 },
    vehicles: {
      id: "wb8",
      reg_number: "222324STU",
      type: "автобус",
      brand: "Mercedes",
      body_value: 50,
      fuel: 60,
    },
    organizations: {
      id: "org8",
      name: "Организация 8",
      inn: "2468013579",
      drivers: { id: "drv8", name: "Александров Александр", working_shift: 2 },
      vehicles: [
        {
          id: "wb8",
          reg_number: "222324STU",
          type: "автобус",
          brand: "Mercedes",
          body_value: 50,
          fuel: 60,
        },
      ],
      owner: "Диспетчер 8",
    },
    owner: "Диспетчер 8",
  },
  {
    id: "9",
    waybill_number: "0252627",
    address: "Улица Горького 9",
    date: "2024-05-09",
    status: "Закрыт",
    drivers: { id: "drv9", name: "Дмитриев Дмитрий", working_shift: 1 },
    vehicles: {
      id: "wb9",
      reg_number: "252627VWX",
      type: "грузовик",
      brand: "DAF",
      body_value: 60,
      fuel: 70,
    },
    organizations: {
      id: "org9",
      name: "Организация 9",
      inn: "3692581470",
      drivers: [{ id: "drv9", name: "Дмитриев Дмитрий", working_shift: 1 }],
      vehicles: [
        {
          id: "wb9",
          reg_number: "252627VWX",
          type: "грузовик",
          brand: "DAF",
          body_value: 60,
          fuel: 70,
        },
      ],
      owner: "Диспетчер 9",
    },
    owner: "Диспетчер 9",
  },
  {
    id: "10",
    waybill_number: "0282930",
    address: "Улица Большевиков 10",
    date: "2024-05-10",
    status: "Открыт",
    drivers: { id: "drv10", name: "Федоров Федор", working_shift: 1 },
    vehicles: {
      id: "wb10",
      reg_number: "282930YZA",
      type: "автобус",
      brand: "MAN",
      body_value: 40,
      fuel: 50,
    },
    organizations: {
      id: "org10",
      name: "Организация 10",
      inn: "9876543210",
      drivers: [{ id: "drv10", name: "Федоров Федор", working_shift: 1 }],
      vehicles: [
        {
          id: "wb10",
          reg_number: "282930YZA",
          type: "автобус",
          brand: "MAN",
          body_value: 40,
          fuel: 50,
        },
      ],
      owner: "Диспетчер 10",
    },
    owner: "Диспетчер 10",
  },
  {
    id: "11",
    waybill_number: "0313233",
    address: "Улица Кирова 11",
    date: "2024-05-11",
    status: "Открыт",
    drivers: { id: "drv11", name: "Николаев Николай", working_shift: 2 },
    vehicles: {
      id: "wb11",
      reg_number: "313233ABC",
      type: "грузовик",
      brand: "Volvo",
      body_value: 70,
      fuel: 80,
    },
    organizations: {
      id: "org11",
      name: "Организация 11",
      inn: "1111111111",
      drivers: [{ id: "drv11", name: "Николаев Николай", working_shift: 2 }],
      vehicles: [
        {
          id: "wb11",
          reg_number: "313233ABC",
          type: "грузовик",
          brand: "Volvo",
          body_value: 70,
          fuel: 80,
        },
      ],
      owner: "Диспетчер 11",
    },
    owner: "Диспетчер 11",
  },
  {
    id: "12",
    waybill_number: "0343536",
    address: "Улица Ленина 12",
    date: "2024-05-12",
    status: "Открыт",
    drivers: { id: "drv12", name: "Алексеев Алексей", working_shift: 1 },
    vehicles: {
      id: "wb12",
      reg_number: "343536XYZ",
      type: "автобус",
      brand: "Mercedes",
      body_value: 60,
      fuel: 70,
    },
    organizations: {
      id: "org12",
      name: "Организация 12",
      inn: "2222222222",
      drivers: [{ id: "drv12", name: "Алексеев Алексей", working_shift: 1 }],
      vehicles: [
        {
          id: "wb12",
          reg_number: "343536XYZ",
          type: "автобус",
          brand: "Mercedes",
          body_value: 60,
          fuel: 70,
        },
      ],
      owner: "Диспетчер 12",
    },
    owner: "Диспетчер 12",
  },
  {
    id: "13",
    waybill_number: "0373839",
    address: "Улица Гагарина 13",
    date: "2024-05-13",
    status: "Открыт",
    drivers: { id: "drv13", name: "Анатольев Анатолий", working_shift: 2 },
    vehicles: {
      id: "wb13",
      reg_number: "373839DEF",
      type: "грузовик",
      brand: "MAN",
      body_value: 80,
      fuel: 90,
    },

    organizations: {
      id: "org13",
      name: "Организация 13",
      inn: "3333333333",
      drivers: [{ id: "drv13", name: "Анатольев Анатолий", working_shift: 2 }],
      vehicles: [
        {
          id: "wb13",
          reg_number: "373839DEF",
          type: "грузовик",
          brand: "MAN",
          body_value: 80,
          fuel: 90,
        },
      ],
      owner: "Диспетчер 13",
    },
    owner: "Диспетчер 13",
  },
  {
    id: "14",
    waybill_number: "0404142",
    address: "Улица Космическая 14",
    date: "2024-05-14",
    status: "Открыт",
    drivers: { id: "drv14", name: "Степанов Степан", working_shift: 1 },
    vehicles: {
      id: "wb14",
      reg_number: "404142GHI",
      type: "грузовик",
      brand: "Scania",
      body_value: 90,
      fuel: 100,
    },

    organizations: {
      id: "org14",
      name: "Организация 14",
      inn: "4444444444",
      drivers: [{ id: "drv14", name: "Степанов Степан", working_shift: 1 }],
      vehicles: [
        {
          id: "wb14",
          reg_number: "404142GHI",
          type: "грузовик",
          brand: "Scania",
          body_value: 90,
          fuel: 100,
        },
      ],
      owner: "Диспетчер 14",
    },
    owner: "Диспетчер 14",
  },
  {
    id: "15",
    waybill_number: "0434445",
    address: "Улица Жукова 15",
    date: "2024-05-15",
    status: "Открыт",
    drivers: { id: "drv15", name: "Игнатов Игнат", working_shift: 2 },
    vehicles: {
      id: "wb15",
      reg_number: "434445MNO",
      type: "автобус",
      brand: "Volvo",
      body_value: 80,
      fuel: 110,
    },
    organizations: {
      id: "org15",
      name: "Организация 15",
      inn: "5555555555",
      drivers: [{ id: "drv15", name: "Игнатов Игнат", working_shift: 2 }],
      vehicles: [
        {
          id: "wb15",
          reg_number: "434445MNO",
          type: "автобус",
          brand: "Volvo",
          body_value: 80,
          fuel: 110,
        },
      ],
      owner: "Диспетчер 15",
    },
    owner: "Диспетчер 15",
  },
  // {
  //   id: "16",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "17",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "18",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "19",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "20",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "21",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "22",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "23",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "24",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "25",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
  // {
  //   id: "26",
  //   waybill_number: "0282930",
  //   address: "Улица Большевиков 10",
  //   date: "2024-05-10",
  //   status: "Открыт",
  //   organizations: { id: "org1", name: "Организация 1" },
  //   vehicle: {
  //     id: "wb10",
  //     reg_number: "282930YZA",
  //     type: "автобус",
  //     brand: "MAN",
  //     body_value: 40,
  //     fuel: 50,
  //   },
  //   drivers: { id: "drv3", name: "Сидоров Сидор", working_shift: 1 },
  //   owner: "Диспетчер 1",
  // },
];

export default mokeWaybill;
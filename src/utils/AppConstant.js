export const STORAGE_KEY = {
    SELECTED_FUND: "selected_Fund",
    REFERRAL_CODE: "referral_code",
    USER_DETAIL: "userDetail"
};

export const HEIRARCHY_DATA = {
    name: 'Main Org',
    children: [
      {
        name: 'Engr Dept',
        // attributes: {
        //   department: 'Production',
        // },
        children: [
          {
            name: 'QA team',
            // attributes: {
            //   department: 'Fabrication',
            // },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
      {
        name: 'Finance Dept',
        // attributes: {
        //   department: 'Production',
        // },
        children: [
          {
            name: 'Accounting',
            // attributes: {
            //   department: 'Fabrication',
            // },
          },
          {
            name: 'HR Dept',
            // attributes: {
            //   department: 'Assembly',
            // },
            children: [
              {
                name: 'Payroll team',
              },
            ],
          },
          {
            name: 'Legal Team',
            // attributes: {
            //   department: 'Assembly',
            // },
          },
        ],
      },
      {
        name: 'Sales',
        // attributes: {
        //   department: 'Production',
        // },
      },
    ],
  };
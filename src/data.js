const initialData = {
    categories: [
      {
        id: 1,
        name: "CSPM Executive Dashboard",
        widgets: [
          {
            id: 1,
            name: "Cloud Accounts",
            type: "ring-graph",
            data: [
              { name: "Group A", value: 400 },
              { name: "Group B", value: 300 },
            ]
          },
          {
            id: 2,
            name: "Cloud Account Risk Assesment",
            type: "ring-graph",
            data: [
              { name: "Group A", value: 400 },
              { name: "Group B", value: 300 },
              { name: "Group C", value: 300 },
              { name: "Group D", value: 200 }
            ]
          }
        ],
      },
      {
        id: 2,
        name: "CWPP Dashboard:",
        widgets: [
          { id: 1, name: "Top 5 Namespace Specific Alerts", type: "empty", content: "" },
          { id: 2, name: "Workload Alerts", type: "empty", content: "" },
        ],
      },
      {
        id: 3,
        name: "Registry Scan",
        widgets: [
          {
            id: 1,
            name: "Image Risk Assessment",
            type: "stacked-bar-graph",
            data: [
              { name: 'Page A', uv: 5000, pv: 3400, amt: 3000 }
            ]
          },
          {
            id: 2,
            name: "Image Security Issues",
            type: "stacked-bar-graph",
            data: [
              { name: 'Page B', uv: 8000, pv: 3400, amt: 1000 }
            ]
          },
        ],
      },
    ],
  };

  export default initialData;
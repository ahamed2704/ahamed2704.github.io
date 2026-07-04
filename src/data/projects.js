const projects = {
  mechanical: [
    {
      id: 1,

      title: "Compact Folding Workbench",

      image: "/projects/workbench.png",

      specification: {
        software: "CATIA V5",
        projectType: "Mechanical Product Design",
        designApproach: "Parametric CAD Modelling",
        status: "Completed"
      },

      overview:
        "Designed and developed a compact folding workbench using CATIA V5 with emphasis on structural stability, manufacturability, and efficient space utilization. The project involved complete 3D modelling, assembly creation, motion validation, and engineering drawing preparation.",

      workbenches: [
        "Part Design",
        "Assembly Design",
        "Drafting"
      ],

      designFeatures: [
        "Complete 3D Part Modelling",
        "Assembly Constraints",
        "Folding Mechanism",
        "Locking Arrangement",
        "Structural Frame",
        "Motion Clearance"
      ],

      designConsiderations: [
        "Structural Stability",
        "Manufacturability",
        "Fastener Placement",
        "Assembly Sequence",
        "Ease of Fabrication"
      ],

      skills: [
        "Product Design",
        "3D Modelling",
        "Mechanical Assembly",
        "Engineering Drawings"
      ]
    },

    {
      id: 2,

      title: "Solar Structure Mounting",

      image: "/projects/solar.png",

      specification: {
        software: "CATIA V5",
        projectType: "Structural Design",
        designApproach: "Parametric CAD Modelling",
        status: "Completed"
      },

      overview:
        "Designed a solar panel mounting structure considering structural rigidity, manufacturability, ease of fabrication, and load distribution. The model demonstrates practical structural design using CATIA V5.",

      workbenches: [
        "Part Design",
        "Generative Shape Design"
      ],

      designFeatures: [
        "Support Frame",
        "Structural Members",
        "Surface Modelling",
        "Mounting Geometry",
        "Parametric Design"
      ],

      designConsiderations: [
        "Load Distribution",
        "Inclination Angle",
        "Structural Strength",
        "Fabrication Simplicity"
      ],

      skills: [
        "Mechanical Design",
        "Surface Modelling",
        "Structural Design",
        "CAD Modelling"
      ]
    },

    {
      id: 3,

      title: "Industrial Material Handling Trolley",

      image: "/projects/trolley.png",

      specification: {
        software: "CATIA V5",
        projectType: "Mechanical Product Design",
        designApproach: "Assembly-Based Design",
        status: "Completed"
      },

      overview:
        "Designed a material handling trolley intended for industrial applications with emphasis on stability, wheel placement, ergonomic handling, manufacturability, and complete assembly modelling.",

      workbenches: [
        "Part Design",
        "Assembly Design",
        "Drafting"
      ],

      designFeatures: [
        "Complete Assembly",
        "Wheel Mounting",
        "Handle Design",
        "Fastener Arrangement",
        "Load Platform"
      ],

      designConsiderations: [
        "Load Carrying Capacity",
        "Stability",
        "Ergonomics",
        "Ease of Manufacturing"
      ],

      skills: [
        "Mechanical Assembly",
        "Engineering Drawings",
        "Product Design",
        "CAD Modelling"
      ]
    }
  ],

  academic: [
    {
      id: 4,

      title: "Optimization of Turning Process Using Nano Cutting Fluids",

      specification: {
        domain: "Manufacturing Engineering",
        type: "Academic Project",
        status: "Completed"
      },

      overview:
        "Investigated machining performance using Al₂O₃ nano cutting fluids under Minimum Quantity Lubrication (MQL) conditions to improve machining efficiency and surface quality.",

      methodology: [
        "Turning Experiments",
        "Surface Roughness Analysis",
        "Cutting Force Measurement",
        "Temperature Measurement",
        "Performance Evaluation"
      ],

      outcome:
        "Observed improved surface finish, reduced cutting temperature, and better machining performance under optimized cutting conditions."
    },

    {
      id: 5,

      title: "Performance Analysis of Vapor Compression Refrigeration System (R-600a)",

      specification: {
        domain: "Thermal Engineering",
        type: "Academic Project",
        status: "Completed"
      },

      overview:
        "Studied the performance characteristics of a Vapor Compression Refrigeration System using R-600a refrigerant by varying capillary tube conditions and analyzing system efficiency.",

      methodology: [
        "COP Analysis",
        "Capillary Tube Testing",
        "Performance Evaluation",
        "Experimental Observation"
      ],

      outcome:
        "Evaluated refrigeration system performance and understood the influence of operating conditions on coefficient of performance."
    }
  ],

  professional: [
    {
      id: 6,

      title: "Professional UAV Projects",

      company: "Magnum Wings",

      status: "Ongoing",

      description:
        "Currently contributing to UAV product development involving CATIA V5 design, engineering drawings, BOM preparation, prototype assembly, subsystem integration, and manufacturing documentation. Additional public project details will be added as development progresses."
    }
  ]
};

export default projects;
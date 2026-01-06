export const guides = {
  Home: {
    title: "Welcome to the Bike Maintenance Guide 🚲",
    description: "Select a section above to learn essential maintenance skills! Click Brakes, Tires, Chain, or Tools."
  },
  Brakes: {
    title: "Brake Repair & Adjustment",
    icon: "🛑",
    steps: [
      {
        id: 1,
        title: "Check Brake Pads",
        description: "Inspect the pads for wear. Replace if less than 3mm remains.",
        icon: "👁️"
      },
      {
        id: 2,
        title: "Align Brake Pads",
        description: "Loosen the pad bolt, align pads with rim, and retighten.",
        icon: "🔧"
      },
      {
        id: 3,
        title: "Adjust Cable Tension",
        description: "Turn the barrel adjuster or use the cable fixing bolt for the correct tension.",
        icon: "🪛"
      },
      {
        id: 4,
        title: "Test Brakes",
        description: "Squeeze the levers and ensure strong, even stopping force.",
        icon: "✅"
      }
    ]
  },
  Tires: {
    title: "Tire & Tube Maintenance",
    icon: "🚲",
    steps: [
      {
        id: 1,
        title: "Check Tire Pressure",
        description: "Use a gauge to meet recommended psi listed on the tire sidewall.",
        icon: "🎈"
      },
      {
        id: 2,
        title: "Inspect for Damage",
        description: "Look for cuts, embedded debris, or worn tread.",
        icon: "🔍"
      },
      {
        id: 3,
        title: "Remove and Replace Tube",
        description: "Release air, unseat one bead with tire levers, remove & replace tube.",
        icon: "🛠️"
      },
      {
        id: 4,
        title: "Inflate and Refit",
        description: "Ensure tube sits inside tire, inflate slowly, check for pinches.",
        icon: "💨"
      }
    ]
  },
  Chain: {
    title: "Chain Cleaning & Lubrication",
    icon: "⛓️",
    steps: [
      {
        id: 1,
        title: "Inspect Chain",
        description: "Check for rust, dirt, and links that don’t bend easily.",
        icon: "🔎"
      },
      {
        id: 2,
        title: "Clean Chain",
        description: "Wipe chain with a rag or use a brush and mild degreaser.",
        icon: "🧽"
      },
      {
        id: 3,
        title: "Lubricate",
        description: "Apply lubricant to inner links while rotating pedals backward.",
        icon: "🛢️"
      },
      {
        id: 4,
        title: "Wipe Off Excess",
        description: "Remove any extra lube with a clean cloth.",
        icon: "🧻"
      }
    ]
  },
  Tools: {
    title: "Essential Tools",
    icon: "🔧",
    steps: [
      {
        id: 1,
        title: "Tire Levers",
        description: "For removing tight tires from the rim.",
        icon: "🚀"
      },
      {
        id: 2,
        title: "Multi-tool",
        description: "Basic on-bike adjustments (Allen keys, screwdriver).",
        icon: "🛠️"
      },
      {
        id: 3,
        title: "Pump",
        description: "Keep tires inflated properly anywhere.",
        icon: "🫧"
      },
      {
        id: 4,
        title: "Chain Lube",
        description: "Keeps drivetrain running smoothly.",
        icon: "🧴"
      }
    ]
  }
};

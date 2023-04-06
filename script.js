function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.MainParameters = {
      "Intelligence": parseInt(data.getAll("mp")[0]),
      "Reaction": parseInt(data.getAll("mp")[1]),
      "Dexterity": parseInt(data.getAll("mp")[2]),
      "Technic": parseInt(data.getAll("mp")[3]),
      "Cool": parseInt(data.getAll("mp")[4]),
      "Will": parseInt(data.getAll("mp")[5]),
      "Luck": parseInt(data.getAll("mp")[6]),
      "Movement": parseInt(data.getAll("mp")[7]),
      "Body": parseInt(data.getAll("mp")[8]),
      "Empathy": parseInt(data.getAll("mp")[9]),
    };
    value.Armory = {
      "Head": {"StopAbility": parseInt(data.getAll("asa")[0]), "Penalty": parseInt(data.getAll("ap")[0])},
      "Torso": {"StopAbility": parseInt(data.getAll("asa")[1]), "Penalty": parseInt(data.getAll("ap")[1])},
      "Shield": {"StopAbility": parseInt(data.getAll("asa")[2]), "Penalty": parseInt(data.getAll("ap")[2])}
    };
    value.Weapon = {
      "1":{"Name": data.getAll("wn")[0], "Damage": parseInt(data.getAll("wd")[0]), "Ammo": parseInt(data.getAll("wa")[0]), "ROF": parseInt(data.getAll("wrof")[0]), "Notes": data.getAll("wnotes")[0]},
      "2":{"Name": data.getAll("wn")[1], "Damage": parseInt(data.getAll("wd")[1]), "Ammo": parseInt(data.getAll("wa")[1]), "ROF": parseInt(data.getAll("wrof")[1]), "Notes": data.getAll("wnotes")[1]},
      "3":{"Name": data.getAll("wn")[2], "Damage": parseInt(data.getAll("wd")[2]), "Ammo": parseInt(data.getAll("wa")[2]), "ROF": parseInt(data.getAll("wrof")[2]), "Notes": data.getAll("wnotes")[2]},
      "4":{"Name": data.getAll("wn")[3], "Damage": parseInt(data.getAll("wd")[3]), "Ammo": parseInt(data.getAll("wa")[3]), "ROF": parseInt(data.getAll("wrof")[3]), "Notes": data.getAll("wnotes")[3]},
      "5":{"Name": data.getAll("wn")[4], "Damage": parseInt(data.getAll("wd")[4]), "Ammo": parseInt(data.getAll("wa")[4]), "ROF": parseInt(data.getAll("wrof")[4]), "Notes": data.getAll("wnotes")[4]},
      "6":{"Name": data.getAll("wn")[5], "Damage": parseInt(data.getAll("wd")[5]), "Ammo": parseInt(data.getAll("wa")[5]), "ROF": parseInt(data.getAll("wrof")[5]), "Notes": data.getAll("wnotes")[5]}
    };
    value.AdditionalSkills = {
      "AwarenessSkills" : {
        "Consetration": {"Lvl": parseInt(data.getAll("lvl")[0]), "Stat": parseInt(data.getAll("stat")[0]), "Base": parseInt(data.getAll("lvl")[0]) + parseInt(data.getAll("stat")[0])},
        "ConsealRevealObject": {"Lvl": parseInt(data.getAll("lvl")[1]), "Stat": parseInt(data.getAll("stat")[1]), "Base": parseInt(data.getAll("lvl")[1]) + parseInt(data.getAll("stat")[1])},
        "LipReading": {"Lvl": parseInt(data.getAll("lvl")[2]), "Stat": parseInt(data.getAll("stat")[2]), "Base": parseInt(data.getAll("lvl")[2]) + parseInt(data.getAll("stat")[2])},
        "Perception": {"Lvl": parseInt(data.getAll("lvl")[3]), "Stat": parseInt(data.getAll("stat")[3]), "Base": parseInt(data.getAll("lvl")[3]) + parseInt(data.getAll("stat")[3])},
        "Tracking": {"Lvl": parseInt(data.getAll("lvl")[4]), "Stat": parseInt(data.getAll("stat")[4]), "Base": parseInt(data.getAll("lvl")[4]) + parseInt(data.getAll("stat")[4])},
      },
      "BodySkills": {
        "Athletics": {"Lvl": parseInt(data.getAll("lvl")[5]), "Stat": parseInt(data.getAll("stat")[5]), "Base": parseInt(data.getAll("lvl")[5]) + parseInt(data.getAll("stat")[5])},
        "Contortionist": {"Lvl": parseInt(data.getAll("lvl")[6]), "Stat": parseInt(data.getAll("stat")[6]), "Base": parseInt(data.getAll("lvl")[6]) + parseInt(data.getAll("stat")[6])},
        "Dance": {"Lvl": parseInt(data.getAll("lvl")[7]), "Stat": parseInt(data.getAll("stat")[7]), "Base": parseInt(data.getAll("lvl")[7]) + parseInt(data.getAll("stat")[7])},
        "Endurance": {"Lvl": parseInt(data.getAll("lvl")[8]), "Stat": parseInt(data.getAll("stat")[8]), "Base": parseInt(data.getAll("lvl")[8]) + parseInt(data.getAll("stat")[8])},
        "ResistTortureDrugs": {"Lvl": parseInt(data.getAll("lvl")[9]), "Stat": parseInt(data.getAll("stat")[9]), "Base": parseInt(data.getAll("lvl")[9]) + parseInt(data.getAll("stat")[9])},
        "Stealth": {"Lvl": parseInt(data.getAll("lvl")[10]), "Stat": parseInt(data.getAll("stat")[10]), "Base": parseInt(data.getAll("lvl")[10]) + parseInt(data.getAll("stat")[10])},
      }, 
      "ControlSkills" : {

      }, 
      "EducationSkills": {

      },
      "FightingSkills": {

      }, 
      "PerfomanceSkills": {

      }, 
      "RangedWeaponSkills": {

      }, 
      "SocialSkills": {

      },
      "TechniqueSkills": {

      }
    }
    console.log({ value });
  }
  
const form = document.getElementById("char_form");
if(form) {
  form.addEventListener('submit', handleSubmit);
}
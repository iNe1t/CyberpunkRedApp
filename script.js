function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    value.MainParameters = {
      "Intelligence": parseInt(data.getAll("mp")[0]),
      "Reaction": parseInt(data.getAll("mp")[1]),
      "Agility": parseInt(data.getAll("mp")[2]),
      "Technic": parseInt(data.getAll("mp")[3]),
      "Charizma": parseInt(data.getAll("mp")[4]),
      "Will": parseInt(data.getAll("mp")[5]),
      "Luck": parseInt(data.getAll("mp")[6]),
      "Speed": parseInt(data.getAll("mp")[7]),
      "Physique": parseInt(data.getAll("mp")[8]),
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
    console.log({ value });
  }
  
const form = document.getElementById("char_form");
if(form) {
  form.addEventListener('submit', handleSubmit);
}
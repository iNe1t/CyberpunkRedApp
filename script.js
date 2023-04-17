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
        "DriveLandVehicle": {"Lvl": parseInt(data.getAll("lvl")[11]), "Stat": parseInt(data.getAll("stat")[11]), "Base": parseInt(data.getAll("lvl")[11]) + parseInt(data.getAll("stat")[11])},
        "PilotAirVehicle": {"Lvl": parseInt(data.getAll("lvl")[12]), "Stat": parseInt(data.getAll("stat")[12]), "Base": parseInt(data.getAll("lvl")[12]) + parseInt(data.getAll("stat")[12])},
        "PilotSeaVehicle": {"Lvl": parseInt(data.getAll("lvl")[13]), "Stat": parseInt(data.getAll("stat")[13]), "Base": parseInt(data.getAll("lvl")[13]) + parseInt(data.getAll("stat")[13])},
        "Riding": {"Lvl": parseInt(data.getAll("lvl")[14]), "Stat": parseInt(data.getAll("stat")[14]), "Base": parseInt(data.getAll("lvl")[14]) + parseInt(data.getAll("stat")[14])},
      }, 
      "EducationSkills": {
        "Accourting": {"Lvl": parseInt(data.getAll("lvl")[15]), "Stat": parseInt(data.getAll("stat")[15]), "Base": parseInt(data.getAll("lvl")[15]) + parseInt(data.getAll("stat")[15])},
        "AnimalHandling": {"Lvl": parseInt(data.getAll("lvl")[16]), "Stat": parseInt(data.getAll("stat")[16]), "Base": parseInt(data.getAll("lvl")[16]) + parseInt(data.getAll("stat")[16])},
        "Bureaucracy": {"Lvl": parseInt(data.getAll("lvl")[17]), "Stat": parseInt(data.getAll("stat")[17]), "Base": parseInt(data.getAll("lvl")[17]) + parseInt(data.getAll("stat")[17])},
        "Business": {"Lvl": parseInt(data.getAll("lvl")[18]), "Stat": parseInt(data.getAll("stat")[18]), "Base": parseInt(data.getAll("lvl")[18]) + parseInt(data.getAll("stat")[18])},
        "Composition": {"Lvl": parseInt(data.getAll("lvl")[19]), "Stat": parseInt(data.getAll("stat")[19]), "Base": parseInt(data.getAll("lvl")[19]) + parseInt(data.getAll("stat")[19])},
        "Criminology": {"Lvl": parseInt(data.getAll("lvl")[20]), "Stat": parseInt(data.getAll("stat")[20]), "Base": parseInt(data.getAll("lvl")[20]) + parseInt(data.getAll("stat")[20])},
        "Cryptography": {"Lvl": parseInt(data.getAll("lvl")[21]), "Stat": parseInt(data.getAll("stat")[21]), "Base": parseInt(data.getAll("lvl")[21]) + parseInt(data.getAll("stat")[21])},
        "Deduction": {"Lvl": parseInt(data.getAll("lvl")[22]), "Stat": parseInt(data.getAll("stat")[22]), "Base": parseInt(data.getAll("lvl")[22]) + parseInt(data.getAll("stat")[22])},
        "Education": {"Lvl": parseInt(data.getAll("lvl")[23]), "Stat": parseInt(data.getAll("stat")[23]), "Base": parseInt(data.getAll("lvl")[23]) + parseInt(data.getAll("stat")[23])},
        "Gamble": {"Lvl": parseInt(data.getAll("lvl")[24]), "Stat": parseInt(data.getAll("stat")[24]), "Base": parseInt(data.getAll("lvl")[24]) + parseInt(data.getAll("stat")[24])},
        "Language" : {
          "1": {"Name": data.getAll("ln")[0], "Lvl": parseInt(data.getAll("lvl")[25]), "Stat": parseInt(data.getAll("stat")[25]), "Base": parseInt(data.getAll("lvl")[25]) + parseInt(data.getAll("stat")[25])},
          "2": {"Name": data.getAll("ln")[1], "Lvl": parseInt(data.getAll("lvl")[26]), "Stat": parseInt(data.getAll("stat")[26]), "Base": parseInt(data.getAll("lvl")[26]) + parseInt(data.getAll("stat")[26])},
          "3": {"Name": data.getAll("ln")[2], "Lvl": parseInt(data.getAll("lvl")[27]), "Stat": parseInt(data.getAll("stat")[27]), "Base": parseInt(data.getAll("lvl")[27]) + parseInt(data.getAll("stat")[27])}
        },
        "Gamble": {"Lvl": parseInt(data.getAll("lvl")[28]), "Stat": parseInt(data.getAll("stat")[28]), "Base": parseInt(data.getAll("lvl")[28]) + parseInt(data.getAll("stat")[28])},
        "LocalExpert" : {
          "1": {"Name": data.getAll("len")[0], "Lvl": parseInt(data.getAll("lvl")[29]), "Stat": parseInt(data.getAll("stat")[29]), "Base": parseInt(data.getAll("lvl")[29]) + parseInt(data.getAll("stat")[29])},
          "2": {"Name": data.getAll("len")[1], "Lvl": parseInt(data.getAll("lvl")[30]), "Stat": parseInt(data.getAll("stat")[30]), "Base": parseInt(data.getAll("lvl")[30]) + parseInt(data.getAll("stat")[30])},
          "3": {"Name": data.getAll("len")[2], "Lvl": parseInt(data.getAll("lvl")[31]), "Stat": parseInt(data.getAll("stat")[31]), "Base": parseInt(data.getAll("lvl")[31]) + parseInt(data.getAll("stat")[31])}
        },
        "Science" : {
          "1": {"Name": data.getAll("sn")[0], "Lvl": parseInt(data.getAll("lvl")[32]), "Stat": parseInt(data.getAll("stat")[32]), "Base": parseInt(data.getAll("lvl")[32]) + parseInt(data.getAll("stat")[32])},
          "2": {"Name": data.getAll("sn")[1], "Lvl": parseInt(data.getAll("lvl")[33]), "Stat": parseInt(data.getAll("stat")[33]), "Base": parseInt(data.getAll("lvl")[33]) + parseInt(data.getAll("stat")[33])}
        },
        "Tactics": {"Lvl": parseInt(data.getAll("lvl")[34]), "Stat": parseInt(data.getAll("stat")[34]), "Base": parseInt(data.getAll("lvl")[34]) + parseInt(data.getAll("stat")[34])},
        "WildernessSurvival": {"Lvl": parseInt(data.getAll("lvl")[35]), "Stat": parseInt(data.getAll("stat")[35]), "Base": parseInt(data.getAll("lvl")[35]) + parseInt(data.getAll("stat")[35])},
      },
      "FightingSkills": {
        "Gamble": {"Lvl": parseInt(data.getAll("lvl")[28]), "Stat": parseInt(data.getAll("stat")[36]), "Base": parseInt(data.getAll("lvl")[36]) + parseInt(data.getAll("stat")[36])},
        "Gamble": {"Lvl": parseInt(data.getAll("lvl")[28]), "Stat": parseInt(data.getAll("stat")[37]), "Base": parseInt(data.getAll("lvl")[37]) + parseInt(data.getAll("stat")[37])},
        "Gamble": {"Lvl": parseInt(data.getAll("lvl")[28]), "Stat": parseInt(data.getAll("stat")[38]), "Base": parseInt(data.getAll("lvl")[38]) + parseInt(data.getAll("stat")[38])},
        "Gamble": {"Lvl": parseInt(data.getAll("lvl")[28]), "Stat": parseInt(data.getAll("stat")[39]), "Base": parseInt(data.getAll("lvl")[39]) + parseInt(data.getAll("stat")[39])},
      }, 
      "PerfomanceSkills": {
        "Acting": {"Lvl": parseInt(data.getAll("lvl")[40]), "Stat": parseInt(data.getAll("stat")[40]), "Base": parseInt(data.getAll("lvl")[40]) + parseInt(data.getAll("stat")[40])},
        "PlayInstrument" : {
          "1": {"Name": data.getAll("pin")[0], "Lvl": parseInt(data.getAll("lvl")[41]), "Stat": parseInt(data.getAll("stat")[41]), "Base": parseInt(data.getAll("lvl")[41]) + parseInt(data.getAll("stat")[41])},
          "2": {"Name": data.getAll("pin")[1], "Lvl": parseInt(data.getAll("lvl")[42]), "Stat": parseInt(data.getAll("stat")[42]), "Base": parseInt(data.getAll("lvl")[42]) + parseInt(data.getAll("stat")[42])}
        },
      },
      "RangedWeaponSkills": {
        "Archery": {"Lvl": parseInt(data.getAll("lvl")[43]), "Stat": parseInt(data.getAll("stat")[43]), "Base": parseInt(data.getAll("lvl")[43]) + parseInt(data.getAll("stat")[43])},
        "Autofire": {"Lvl": parseInt(data.getAll("lvl")[44]), "Stat": parseInt(data.getAll("stat")[44]), "Base": parseInt(data.getAll("lvl")[44]) + parseInt(data.getAll("stat")[44])},
        "Handgun": {"Lvl": parseInt(data.getAll("lvl")[45]), "Stat": parseInt(data.getAll("stat")[45]), "Base": parseInt(data.getAll("lvl")[45]) + parseInt(data.getAll("stat")[45])},
        "HeavyWeapons": {"Lvl": parseInt(data.getAll("lvl")[46]), "Stat": parseInt(data.getAll("stat")[46]), "Base": parseInt(data.getAll("lvl")[46]) + parseInt(data.getAll("stat")[46])},
        "ShoulderArms": {"Lvl": parseInt(data.getAll("lvl")[47]), "Stat": parseInt(data.getAll("stat")[47]), "Base": parseInt(data.getAll("lvl")[47]) + parseInt(data.getAll("stat")[47])},
      }, 
      "SocialSkills": {
        "Bribery": {"Lvl": parseInt(data.getAll("lvl")[48]), "Stat": parseInt(data.getAll("stat")[48]), "Base": parseInt(data.getAll("lvl")[48]) + parseInt(data.getAll("stat")[48])},
        "Conversation": {"Lvl": parseInt(data.getAll("lvl")[49]), "Stat": parseInt(data.getAll("stat")[49]), "Base": parseInt(data.getAll("lvl")[49]) + parseInt(data.getAll("stat")[49])},
        "HumanPerception": {"Lvl": parseInt(data.getAll("lvl")[50]), "Stat": parseInt(data.getAll("stat")[50]), "Base": parseInt(data.getAll("lvl")[50]) + parseInt(data.getAll("stat")[50])},
        "Interrogation": {"Lvl": parseInt(data.getAll("lvl")[51]), "Stat": parseInt(data.getAll("stat")[51]), "Base": parseInt(data.getAll("lvl")[51]) + parseInt(data.getAll("stat")[51])},
        "Persuasion": {"Lvl": parseInt(data.getAll("lvl")[52]), "Stat": parseInt(data.getAll("stat")[52]), "Base": parseInt(data.getAll("lvl")[52]) + parseInt(data.getAll("stat")[52])},
        "PersonalGrooming": {"Lvl": parseInt(data.getAll("lvl")[53]), "Stat": parseInt(data.getAll("stat")[53]), "Base": parseInt(data.getAll("lvl")[53]) + parseInt(data.getAll("stat")[53])},
        "Streetwise": {"Lvl": parseInt(data.getAll("lvl")[54]), "Stat": parseInt(data.getAll("stat")[54]), "Base": parseInt(data.getAll("lvl")[54]) + parseInt(data.getAll("stat")[54])},
        "Trading": {"Lvl": parseInt(data.getAll("lvl")[55]), "Stat": parseInt(data.getAll("stat")[55]), "Base": parseInt(data.getAll("lvl")[55]) + parseInt(data.getAll("stat")[55])},
        "WardrobeAndStyle": {"Lvl": parseInt(data.getAll("lvl")[56]), "Stat": parseInt(data.getAll("stat")[56]), "Base": parseInt(data.getAll("lvl")[56]) + parseInt(data.getAll("stat")[56])},
      },
      "TechniqueSkills": {
        "AirVehicleTech": {"Lvl": parseInt(data.getAll("lvl")[57]), "Stat": parseInt(data.getAll("stat")[57]), "Base": parseInt(data.getAll("lvl")[57]) + parseInt(data.getAll("stat")[57])},
        "BasicTech": {"Lvl": parseInt(data.getAll("lvl")[58]), "Stat": parseInt(data.getAll("stat")[58]), "Base": parseInt(data.getAll("lvl")[58]) + parseInt(data.getAll("stat")[58])},
        "Cybertech": {"Lvl": parseInt(data.getAll("lvl")[59]), "Stat": parseInt(data.getAll("stat")[59]), "Base": parseInt(data.getAll("lvl")[59]) + parseInt(data.getAll("stat")[59])},
        "Demolitions": {"Lvl": parseInt(data.getAll("lvl")[60]), "Stat": parseInt(data.getAll("stat")[60]), "Base": parseInt(data.getAll("lvl")[60]) + parseInt(data.getAll("stat")[60])},
        "ElectronicSecurityTech": {"Lvl": parseInt(data.getAll("lvl")[61]), "Stat": parseInt(data.getAll("stat")[61]), "Base": parseInt(data.getAll("lvl")[61]) + parseInt(data.getAll("stat")[61])},
        "FirstAid": {"Lvl": parseInt(data.getAll("lvl")[62]), "Stat": parseInt(data.getAll("stat")[62]), "Base": parseInt(data.getAll("lvl")[62]) + parseInt(data.getAll("stat")[62])},
        "Forgery": {"Lvl": parseInt(data.getAll("lvl")[63]), "Stat": parseInt(data.getAll("stat")[63]), "Base": parseInt(data.getAll("lvl")[63]) + parseInt(data.getAll("stat")[63])},
        "LandVehicleTech": {"Lvl": parseInt(data.getAll("lvl")[64]), "Stat": parseInt(data.getAll("stat")[64]), "Base": parseInt(data.getAll("lvl")[64]) + parseInt(data.getAll("stat")[64])},
        "PaintDrawSculpt": {"Lvl": parseInt(data.getAll("lvl")[65]), "Stat": parseInt(data.getAll("stat")[65]), "Base": parseInt(data.getAll("lvl")[65]) + parseInt(data.getAll("stat")[65])},
        "Paramedic": {"Lvl": parseInt(data.getAll("lvl")[66]), "Stat": parseInt(data.getAll("stat")[66]), "Base": parseInt(data.getAll("lvl")[66]) + parseInt(data.getAll("stat")[66])},
        "PhotographyFilm": {"Lvl": parseInt(data.getAll("lvl")[67]), "Stat": parseInt(data.getAll("stat")[67]), "Base": parseInt(data.getAll("lvl")[67]) + parseInt(data.getAll("stat")[67])},
        "PickLock": {"Lvl": parseInt(data.getAll("lvl")[68]), "Stat": parseInt(data.getAll("stat")[68]), "Base": parseInt(data.getAll("lvl")[68]) + parseInt(data.getAll("stat")[68])},
        "PickPocket": {"Lvl": parseInt(data.getAll("lvl")[69]), "Stat": parseInt(data.getAll("stat")[69]), "Base": parseInt(data.getAll("lvl")[69]) + parseInt(data.getAll("stat")[69])},
        "SeaVehicleTech": {"Lvl": parseInt(data.getAll("lvl")[70]), "Stat": parseInt(data.getAll("stat")[70]), "Base": parseInt(data.getAll("lvl")[70]) + parseInt(data.getAll("stat")[70])},
        "Weaponstech": {"Lvl": parseInt(data.getAll("lvl")[71]), "Stat": parseInt(data.getAll("stat")[71]), "Base": parseInt(data.getAll("lvl")[71]) + parseInt(data.getAll("stat")[71])},
      }
    }
    value.Reputation = parseInt(data.getAll("rep"));
    value.AchievingRep = data.getAll("achrep")[0].split("\n").join(" ");
    value.CurrentUpgradePoints = parseInt(data.getAll("cup"));
    value.MaximumUpgradePoints = parseInt(data.getAll("mup"));
    // Жизненный путь
    value.CultureLegacy = data.getAll("cl")[0].split("\n").join(" ");
    value.Personality = data.getAll("persona")[0];
    value.ClothesStyle = data.getAll("clothes_style")[0];
    value.Haircut = data.getAll("haircut")[0];
    value.MostValuable = data.getAll("most_valuable")[0];
    value.Feel2People = data.getAll("feel_to_people")[0];
    value.ClosestPeople = data.getAll("closest_people")[0];
    value.ValuableThing = data.getAll("valuable_thing")[0];
    value.FamilyHistory = data.getAll("family_history")[0];
    value.Surroundings = data.getAll("surroundings")[0];
    value.FamilyCrysis = data.getAll("family_crysis")[0];
    value.LifeGoals = data.getAll("life_goals")[0];
    value.Friends = {
      "1": data.getAll("friend")[0],
      "2": data.getAll("friend")[1],
      "3": data.getAll("friend")[2],
      "4": data.getAll("friend")[3],
    };
    value.TragicalLove = {
      "1": data.getAll("tl")[0],
      "2": data.getAll("tl")[1],
      "3": data.getAll("tl")[2],
      "4": data.getAll("tl")[3],
    };
    value.Enemy = {
      "1": {"Who": data.getAll("who")[0], "Reason": data.getAll("reason")[0],"CanDo": data.getAll("can_do")[0],"ToKill": data.getAll("to_kill")[0]},
      "2": {"Who": data.getAll("who")[1], "Reason": data.getAll("reason")[1],"CanDo": data.getAll("can_do")[1],"ToKill": data.getAll("to_kill")[1]},
      "3": {"Who": data.getAll("who")[2], "Reason": data.getAll("reason")[2],"CanDo": data.getAll("can_do")[2],"ToKill": data.getAll("to_kill")[2]},
    };
    value.Fashion = data.getAll("fashion")[0].split("\n").join(" ");
    value.RoleLivePath = data.getAll("rlp")[0].split("\n").join(" ");
    value.Housing = data.getAll("housing")[0].split("\n").join(" ");
    value.Rent = data.getAll("rent")[0].split("\n").join(" ");
    value.Lifestyle = data.getAll("lifestyle")[0].split("\n").join(" ");
    value.Gear = {
      "1": {"Name":data.getAll("gear_name")[0] ,"Note":data.getAll("gear_note")[0]},
      "2": {"Name":data.getAll("gear_name")[1] ,"Note":data.getAll("gear_note")[1]},
      "3": {"Name":data.getAll("gear_name")[2] ,"Note":data.getAll("gear_note")[2]},
      "4": {"Name":data.getAll("gear_name")[3] ,"Note":data.getAll("gear_note")[3]},
      "5": {"Name":data.getAll("gear_name")[4] ,"Note":data.getAll("gear_note")[4]},
      "6": {"Name":data.getAll("gear_name")[5] ,"Note":data.getAll("gear_note")[5]},
      "7": {"Name":data.getAll("gear_name")[6] ,"Note":data.getAll("gear_note")[6]},
      "8": {"Name":data.getAll("gear_name")[7] ,"Note":data.getAll("gear_note")[7]},
      "9": {"Name":data.getAll("gear_name")[8] ,"Note":data.getAll("gear_note")[8]},
      "10": {"Name":data.getAll("gear_name")[9] ,"Note":data.getAll("gear_note")[9]},
      "11": {"Name":data.getAll("gear_name")[10] ,"Note":data.getAll("gear_note")[10]},
      "12": {"Name":data.getAll("gear_name")[11] ,"Note":data.getAll("gear_note")[11]},
      "13": {"Name":data.getAll("gear_name")[12] ,"Note":data.getAll("gear_note")[12]},
      "14": {"Name":data.getAll("gear_name")[13] ,"Note":data.getAll("gear_note")[13]},
      "15": {"Name":data.getAll("gear_name")[14] ,"Note":data.getAll("gear_note")[14]},
      "16": {"Name":data.getAll("gear_name")[15] ,"Note":data.getAll("gear_note")[15]},
      "17": {"Name":data.getAll("gear_name")[16] ,"Note":data.getAll("gear_note")[16]},
      "18": {"Name":data.getAll("gear_name")[17] ,"Note":data.getAll("gear_note")[17]},
    };
    value.Ammo = parseInt(data.getAll("ammo"));
    value.Cash = parseInt(data.getAll("cash"));
    value.Cyberware = {
      "Cyberaudio": {
        "isCyberaudio": data.getAll("iscyberaudio")[0],
        "1": {"Name": data.getAll("cyb_au_name")[0], "Note": data.getAll("cyb_au_note")[0]},
        "2": {"Name": data.getAll("cyb_au_name")[1], "Note": data.getAll("cyb_au_note")[1]},
        "3": {"Name": data.getAll("cyb_au_name")[2], "Note": data.getAll("cyb_au_note")[2]},
      },
      "Cybereyes": {
        "Left" :{
          "isCybereye": data.getAll("iscybereye")[0],
          "1": {"Name": data.getAll("cyb_eye_name")[0], "Note": data.getAll("cyb_eye_note")[0]},
          "2": {"Name": data.getAll("cyb_eye_name")[1], "Note": data.getAll("cyb_eye_note")[1]},
          "3": {"Name": data.getAll("cyb_eye_name")[2], "Note": data.getAll("cyb_eye_note")[2]},
        },
        "Right":{
          "isCybereye": data.getAll("iscybereye")[1],
          "1": {"Name": data.getAll("cyb_eye_name")[3], "Note": data.getAll("cyb_eye_note")[3]},
          "2": {"Name": data.getAll("cyb_eye_name")[4], "Note": data.getAll("cyb_eye_note")[4]},
          "3": {"Name": data.getAll("cyb_eye_name")[5], "Note": data.getAll("cyb_eye_note")[5]},
        },
      },
      "Cyberarms": {
        "Left" :{
          "isCyberarm": data.getAll("iscyberarm")[0],
          "1": {"Name": data.getAll("cyb_arm_name")[0], "Note": data.getAll("cyb_arm_note")[0]},
          "2": {"Name": data.getAll("cyb_arm_name")[1], "Note": data.getAll("cyb_arm_note")[1]},
          "3": {"Name": data.getAll("cyb_arm_name")[2], "Note": data.getAll("cyb_arm_note")[2]},
        },
        "Right":{
          "isCyberarm": data.getAll("iscyberarm")[1],
          "1": {"Name": data.getAll("cyb_arm_name")[3], "Note": data.getAll("cyb_arm_note")[3]},
          "2": {"Name": data.getAll("cyb_arm_name")[4], "Note": data.getAll("cyb_arm_note")[4]},
          "3": {"Name": data.getAll("cyb_arm_name")[5], "Note": data.getAll("cyb_arm_note")[5]},
        },
      },
      "NeuralLink": {
        "isNeuralLink": data.getAll("isneurallink")[0],
        "1": {"Name": data.getAll("neu_link_name")[0], "Note": data.getAll("neu_link_note")[0]},
        "2": {"Name": data.getAll("neu_link_name")[1], "Note": data.getAll("neu_link_note")[1]},
        "3": {"Name": data.getAll("neu_link_name")[2], "Note": data.getAll("neu_link_note")[2]},
      },
      "Cyberlegs": {
        "Left" :{
          "isCyberLeg": data.getAll("iscyberleg")[0],
          "1": {"Name": data.getAll("cyb_leg_name")[0], "Note": data.getAll("cyb_leg_note")[0]},
          "2": {"Name": data.getAll("cyb_leg_name")[1], "Note": data.getAll("cyb_leg_note")[1]},
          "3": {"Name": data.getAll("cyb_leg_name")[2], "Note": data.getAll("cyb_leg_note")[2]},
        },
        "Right":{
          "isCyberLeg": data.getAll("iscyberleg")[1],
          "1": {"Name": data.getAll("cyb_leg_name")[3], "Note": data.getAll("cyb_leg_note")[3]},
          "2": {"Name": data.getAll("cyb_leg_name")[4], "Note": data.getAll("cyb_leg_note")[4]},
          "3": {"Name": data.getAll("cyb_leg_name")[5], "Note": data.getAll("cyb_leg_note")[5]},
        },
      },
      "InternalCyberware": {
        "1": {"Name": data.getAll("int_cyb_ware_name")[0], "Note": data.getAll("ext_cyb_ware_note")[0]},
        "2": {"Name": data.getAll("int_cyb_ware_name")[1], "Note": data.getAll("ext_cyb_ware_note")[1]},
        "3": {"Name": data.getAll("int_cyb_ware_name")[2], "Note": data.getAll("ext_cyb_ware_note")[2]},
      },
      "ExternalCyberware": {
        "1": {"Name": data.getAll("ext_cyb_ware_name")[0], "Note": data.getAll("ext_cyb_ware_note")[0]},
        "2": {"Name": data.getAll("ext_cyb_ware_name")[1], "Note": data.getAll("ext_cyb_ware_note")[1]},
        "3": {"Name": data.getAll("ext_cyb_ware_name")[2], "Note": data.getAll("ext_cyb_ware_note")[2]},
      },
      "Fashionware": {
        "1": {"Name": data.getAll("fash_ware_name")[0], "Note": data.getAll("fash_ware_note")[0]},
        "2": {"Name": data.getAll("fash_ware_name")[1], "Note": data.getAll("fash_ware_note")[1]},
        "3": {"Name": data.getAll("fash_ware_name")[2], "Note": data.getAll("fash_ware_note")[2]},
      },
      "Borgware": {
        "1": {"Name": data.getAll("borg_ware_name")[0], "Note": data.getAll("borg_ware_note")[0]},
        "2": {"Name": data.getAll("borg_ware_name")[1], "Note": data.getAll("borg_ware_note")[1]},
        "3": {"Name": data.getAll("borg_ware_name")[2], "Note": data.getAll("borg_ware_note")[2]},
      },
    };
    console.log({ value });
  }
  
const form = document.getElementById("char_form");
if(form) {
  form.addEventListener('submit', handleSubmit);
}
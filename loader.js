function LoadFromJSON() {
    var data = document.getElementById("loader").files[0];
    let reader = new FileReader();
    reader.addEventListener("loadend", () => {
        var json = JSON.parse(reader.result);
        // console.log(json);
        document.getElementsByName("CharacterName")[0].value = json.CharacterName;
        document.getElementsByName("CharacterNickNames")[0].value = json.CharacterNickNames;
        document.getElementsByName("Role")[0].value = json.Role;
        document.getElementsByName("SpecialAbility")[0].value = json.SpecialAbility;
        document.getElementsByName("SA_Rank")[0].value = json.SA_Rank;
        document.getElementsByName("CharacterNotes")[0].value = json.CharacterNotes;
        document.getElementsByName("CurrentHumanityPoints")[0].value = json.CurrentHumanityPoints;
        document.getElementsByName("MaximumHumanityPoints")[0].value = json.MaximumHumanityPoints;
        document.getElementsByName("CurrentHealthPoints")[0].value = json.CurrentHealthPoints;
        document.getElementsByName("MaximumHealthPoints")[0].value = json.MaximumHealthPoints;
        document.getElementsByName("CritInjuries")[0].value = json.CritInjuries;
    });
    reader.readAsText(data);
}
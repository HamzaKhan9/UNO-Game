// const themes = [
//   {
//     BGtheme:
//       "linear-gradient(200deg,rgba(3, 2, 2) 0%,rgba(150, 103, 30) 41%,rgba(222, 181, 52) 61%,rgba(255, 0, 0) 100%)",
//     Fronttheme:
//       "linear-gradient(to right,rgba(3, 2, 2) 0%,rgba(190, 147, 47) 10%,rgba(255, 0, 0) 50%,rgba(190, 147, 47) 90%,rgba(3, 2, 2) 100%)",
//     Boxtheme:
//       "linear-gradient(200deg,rgba(185, 65, 240, 1) 0%,rgb(86, 13, 160) 100%)",
//     Buttontheme: "#b52509",
//   },
//   {
//     BGtheme :
//       "linear-gradient(200deg,rgba(0, 0, 0) 5%,rgba(65, 103, 240) 41%,rgba(0, 39, 189) 61%,rgba(87, 226, 215) 100%)",
//     Fronttheme :
//       "linear-gradient(to right,rgba(0, 0, 0, 1) 0%,rgba(65, 103, 240, 1) 10%,rgba(0, 39, 189, 1) 50%,rgba(36, 116, 200, 1) 90%,rgba(0, 0, 0, 1) 100%)",
//     Boxtheme :
//       "linear-gradient(200deg,rgba(0, 39, 189, 1) 0%,rgb(71, 185, 176) 100%",
//     Buttontheme : "#242c6d",
//   },
//   {
//     BGtheme :
//       "linear-gradient(200deg,rgba(0, 0, 0, 1) 0%,rgba(185, 65, 240, 1) 41%,rgba(95, 0, 189, 1) 61%,rgba(111, 14, 74, 1) 100%",
//     Fronttheme :
//       "linear-gradient(to right,rgba(3, 2, 2) 0%,rgba(185, 65, 240, 1) 10%,rgba(95, 0, 189, 1) 50%,rgba(185, 65, 240, 1) 90%,rgba(3, 2, 2) 100%)",
//     Boxtheme : "linear-gradient(200deg,rgba(0, 39, 189, 1) 0%,rgb(71, 185, 176) 100%",
//     Buttontheme :
//       "#242c6d"},
//   {BGtheme = "", Fronttheme = "", Boxtheme = "", Buttontheme = ""},
// ];

let singleplayer = false;
document.documentElement.style.setProperty(
  "--theme-bg-color",
  localStorage.getItem("backgroundColor")
);
document.documentElement.style.setProperty(
  "--theme-box-color",
  localStorage.getItem("boxColor")
);
document.documentElement.style.setProperty(
  "--theme-front-color",
  localStorage.getItem("frontColor")
);
document.documentElement.style.setProperty(
  "--theme-buttons-color",
  localStorage.getItem("buttonColor")
);

function scoreButtonClicked(option) {
  let score = document.getElementById(`scoreOption${option}`).innerHTML;
  document.getElementById("customScore").value = score;
}
function proceedButtonClicked() {
  let score = document.getElementById("customScore").value;
  if (score > 0 && score < 1001) {
    document.getElementById("selectScoreContainer").display = "none";
    let scoreLimit = JSON.stringify(score);
    localStorage.setItem("ScoreLimit", scoreLimit);
    if (singleplayer === true) {
      window.location.href = "./singleplayer.html";
    } else window.location.href = "./multiplayer.html";
  }
}
function multiplayerClicked() {
  document.getElementById("selectScoreContainer").style.display = "unset";
}
function singleplayerClicked() {
  singleplayer = true;
  if (localStorage.getItem("scoring") === "On") {
    document.getElementById("selectScoreContainer").style.display = "unset";
  } else {
    if (singleplayer === true) {
      window.location.href = "./singleplayer.html";
    } else window.location.href = "./multiplayer.html";
  }
}
function instructionsClicked() {
  document.getElementById("instructionsContainer").style.display = "unset";
}
function settingsClicked() {
  document.getElementById("settingsContainer").style.display = "unset";
}
function onoffScoring() {
  let currentColor = getComputedStyle(document.body).getPropertyValue(
    "--theme-buttons-color"
  );
  let currentvalue = document.getElementById("onoffScoring").value;
  if (currentvalue == "Off") {
    document.getElementById(
      "onoffScoring"
    ).style.backgroundImage = `-webkit-linear-gradient(left,${currentColor} 50%,rgb(160, 154, 154) 51%)`;
    console.log(currentvalue);
    document.getElementById("onoffScoring").value = "On";
    localStorage.setItem("scoring", "On");
  } else {
    document.getElementById(
      "onoffScoring"
    ).style.backgroundImage = `-webkit-linear-gradient(left,rgb(160, 154, 154) 50%,${currentColor} 51%)`;
    document.getElementById("onoffScoring").value = "Off";
    localStorage.setItem("scoring", "Off");
  }
}
function onoffSound() {
  let currentColor = getComputedStyle(document.body).getPropertyValue(
    "--theme-buttons-color"
  );
  let currentvalue = document.getElementById("onoffSound").value;
  if (currentvalue == "Off") {
    document.getElementById(
      "onoffSound"
    ).style.backgroundImage = `-webkit-linear-gradient(left,${currentColor} 50%,rgb(160, 154, 154) 51%)`;
    document.getElementById("onoffSound").value = "On";
    localStorage.setItem("sound", "On");
  } else {
    document.getElementById(
      "onoffSound"
    ).style.backgroundImage = `-webkit-linear-gradient(left,rgb(160, 154, 154) 50%,${currentColor} 51%)`;
    document.getElementById("onoffSound").value = "Off";
    localStorage.setItem("sound", "Off");
  }
}
function selectTheme(themeNo) {
  let BGtheme;
  let Fronttheme;
  let Boxtheme;
  let Buttontheme;
  if (themeNo === 1) {
    BGtheme =
      "linear-gradient(200deg,rgba(3, 2, 2) 0%,rgba(150, 103, 30) 41%,rgba(222, 181, 52) 61%,rgba(255, 0, 0) 100%)";
    Fronttheme =
      "linear-gradient(to right,rgba(3, 2, 2) 0%,rgba(190, 147, 47) 10%,rgba(255, 0, 0) 50%,rgba(190, 147, 47) 90%,rgba(3, 2, 2) 100%)";
    Boxtheme =
      "linear-gradient(200deg,rgba(249, 16, 16, 1) 0%,rgba(153, 101, 29, 1) 100%)";
    Buttontheme = "#b52509";
    document.documentElement.style.setProperty("--theme-bg-color", BGtheme);
    document.documentElement.style.setProperty(
      "--theme-front-color",
      Fronttheme
    );
    document.documentElement.style.setProperty("--theme-box-color", Boxtheme);
    document.documentElement.style.setProperty(
      "--theme-buttons-color",
      Buttontheme
    );
    localStorage.setItem("backgroundColor", BGtheme);
    localStorage.setItem("frontColor", Fronttheme);
    localStorage.setItem("boxColor", Boxtheme);
    localStorage.setItem("buttonColor", Buttontheme);
  } else if (themeNo === 2) {
    BGtheme =
      "linear-gradient(200deg,rgba(0, 0, 0) 5%,rgba(65, 103, 240) 41%,rgba(0, 39, 189) 61%,rgba(87, 226, 215) 100%)";
    Fronttheme =
      "linear-gradient(to right,rgba(0, 0, 0, 1) 0%,rgba(65, 103, 240, 1) 10%,rgba(0, 39, 189, 1) 50%,rgba(36, 116, 200, 1) 90%,rgba(0, 0, 0, 1) 100%)";
    Boxtheme =
      "linear-gradient(200deg,rgba(0, 39, 189, 1) 0%,rgb(71, 185, 176) 100%";
    Buttontheme = "#242c6d";
    document.documentElement.style.setProperty("--theme-bg-color", BGtheme);
    document.documentElement.style.setProperty(
      "--theme-front-color",
      Fronttheme
    );
    document.documentElement.style.setProperty(
      "--theme-box-color",
      "linear-gradient(200deg,rgba(0, 39, 189, 1) 0%,rgb(71, 185, 176) 100%"
    );
    document.documentElement.style.setProperty(
      "--theme-buttons-color",
      Buttontheme
    );
    localStorage.setItem("backgroundColor", BGtheme);
    localStorage.setItem("frontColor", Fronttheme);
    localStorage.setItem("boxColor", Boxtheme);
    localStorage.setItem("buttonColor", Buttontheme);
  } else if (themeNo === 3) {
    BGtheme =
      "linear-gradient(200deg,rgba(0, 0, 0, 1) 0%,rgba(185, 65, 240, 1) 41%,rgba(95, 0, 189, 1) 61%,rgba(111, 14, 74, 1) 100%";
    Fronttheme =
      "linear-gradient(to right,rgba(3, 2, 2) 0%,rgba(185, 65, 240, 1) 10%,rgba(95, 0, 189, 1) 50%,rgba(185, 65, 240, 1) 90%,rgba(3, 2, 2) 100%)";
    Boxtheme =
      "linear-gradient(200deg,rgba(185, 65, 240, 1) 0%,rgb(86, 13, 160) 100%)";
    Buttontheme = "#570c6e";
    document.documentElement.style.setProperty("--theme-bg-color", BGtheme);
    document.documentElement.style.setProperty(
      "--theme-front-color",
      Fronttheme
    );
    document.documentElement.style.setProperty("--theme-box-color", Boxtheme);
    document.documentElement.style.setProperty(
      "--theme-buttons-color",
      Buttontheme
    );
    localStorage.setItem("backgroundColor", BGtheme);
    localStorage.setItem("frontColor", Fronttheme);
    localStorage.setItem("boxColor", Boxtheme);
    localStorage.setItem("buttonColor", Buttontheme);
  } else if (themeNo === 4) {
    BGtheme =
      "linear-gradient(200deg,rgba(0, 0, 0, 1) 0%,rgba(119, 217, 48, 1) 41%,rgba(5, 92, 34, 1) 61%,rgba(158, 156, 0, 1) 100%)";
    Fronttheme =
      "linear-gradient(to right,rgba(3, 2, 2) 0%,rgba(119, 217, 48, 1) 10%,rgba(5, 92, 34, 1) 50%,rgba(119, 217, 48, 1) 90%,rgba(3, 2, 2) 100%)";
    Boxtheme =
      "linear-gradient(200deg,rgba(119, 217, 48, 1) 0%,rgba(5, 92, 34, 1) 100%)";
    Buttontheme = "#18723d";
    document.documentElement.style.setProperty("--theme-bg-color", BGtheme);
    document.documentElement.style.setProperty(
      "--theme-front-color",
      Fronttheme
    );
    document.documentElement.style.setProperty("--theme-box-color", Boxtheme);
    document.documentElement.style.setProperty(
      "--theme-buttons-color",
      Buttontheme
    );
    localStorage.setItem("backgroundColor", BGtheme);
    localStorage.setItem("frontColor", Fronttheme);
    localStorage.setItem("boxColor", Boxtheme);
    localStorage.setItem("buttonColor", Buttontheme);
  }
}

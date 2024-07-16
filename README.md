# Stein, Schere, Papier - Spiel

<img width="1931" alt="github_stein_schere_papier_spiel" src="https://github.com/WingsOfFury/stein_schere_papier_spiel/assets/85767977/2dfcff3f-a7a5-4a02-a2a1-50cfb17a713e">

---

# Meine Learnings aus diesem Projekt

### DOM-Manipulation
**Elemente abrufen:** <br />
- Ich habe gelernt, wie man Elemente aus dem DOM mit `document.getElementById` und `document.querySelector` abruft.
  ```javascript
  const calorieCounter = document.getElementById("calorie-counter");
  const budgetNumberInput = document.getElementById("budget");
  const entryDropdown = document.getElementById("entry-dropdown");
  ```

**Neue Elemente hinzufügen:** <br />
- Mit `insertAdjacentHTML` kann ich dynamische neue Eingabefelder erstellen und in das DOM einfügen.
  ```javascript
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
  ```
---

### Spiellogik
**Eingabevalidierung:** <br />
- Ich habe gelernt, wie man sicherstellt, dass Spieler- und Computerzüge gültig sind und die Spiellogik korrekt implementiert ist.
  ```javascript
  function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Stein" && computer === "Schere") ||
    (player === "Schere" && computer === "Papier") ||
    (player === "Papier" && computer === "Stein")
  );
  }
  ```
---

### UI-Update und Spielablauf
**UI-Aktualisierung:** <br />
- Ich habe gelernt, wie man das Ergebnis jeder Runde dynamisch in der Benutzeroberfläche aktualisiert und die Punktestände anzeigt.
  ```javascript
  function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Spieler" : "Computer"
    } hat das Spiel gewonnen!`;

    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
  }
  ```
---
  
### Spielzustand zurücksetzen
**Formular zurücksetzen:** <br />
- Ich habe gelernt, wie man das Spiel zurücksetzt, nachdem ein Spieler gewonnen hat oder das Spiel neu gestartet werden soll.
  ```javascript
  function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
  }

    resetGameBtn.addEventListener("click", resetGame);
  ```

---

### Event-Listener
**Interaktivität hinzufügen:** <br />
- Durch das Hinzufügen von Event-Listenern reagieren wir auf Benutzerinteraktionen und führen die entsprechenden Spielmechaniken aus.
  ```javascript
  rockBtn.addEventListener("click", function () {
    showResults("Stein");
  });

  paperBtn.addEventListener("click", function () {
    showResults("Papier");
  });

  scissorsBtn.addEventListener("click", function () {
    showResults("Schere");
  });
  ```

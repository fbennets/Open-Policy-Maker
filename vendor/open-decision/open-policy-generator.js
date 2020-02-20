tree={
  "header": {
    "version": 0.1,
    "build_date": "2020-02-20",
    "logic_type": "jsonLogic version X",
    "owner": "open-policy-maker",
    "tree_name": "Open Policy Generator",
    "tree_slug": "open-policy-generator",
    "start_node": "ziel",
    "vars": {}
  },
  "tragerschaftsch": {
    "name": "Tr\u00e4gerschaftSch",
    "question": "<p>Leider unterst&uuml;tzen wir momentan noch keine privaten Schulen.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": []
  },
  "endepolicy": {
    "name": "EndePolicy",
    "question": "<p>Hier folgt <strong>bald</strong> mehr Inhalt.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": [],
    "results": {
      "0": {}
    }
  },
  "lizenzieren": {
    "name": "Lizenzieren",
    "question": "<p>Das ist toll! Bitte gehe <a href=\"https://creativecommons.org/choose/?lang=de\">hierhin</a>.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": [],
    "results": {
      "0": {}
    }
  },
  "bundeslandschul": {
    "name": "BundeslandSchul",
    "question": "<p>In welchem Bundesland liegt die Schule?</p>",
    "input_type": "list",
    "end_node": false,
    "rules": {
      "if": [
        {
          "in": [
            {
              "var": "answer"
            },
            [
              "Baden W\u00fcrttemberg",
              "Bayern",
              "Berlin",
              "Brandenburg",
              "Bremen",
              "Hamburg",
              "Hessen",
              "Mecklenburg-Vorpommern",
              "Niedersachsen",
              "Nordrhein Westfalen",
              "Rheinland-Pfalz",
              "Saarland",
              "Sachsen",
              "Sachsen-Anhalt",
              "Schleswig-Holstein",
              "Th\u00fcringen"
            ]
          ]
        },
        "0"
      ]
    },
    "answers": [
      "Baden W\u00fcrttemberg",
      "Bayern",
      "Berlin",
      "Brandenburg",
      "Bremen",
      "Hamburg",
      "Hessen",
      "Mecklenburg-Vorpommern",
      "Niedersachsen",
      "Nordrhein Westfalen",
      "Rheinland-Pfalz",
      "Saarland",
      "Sachsen",
      "Sachsen-Anhalt",
      "Schleswig-Holstein",
      "Th\u00fcringen"
    ],
    "results": {
      "0": {
        "destination": "endepolicy"
      }
    }
  },
  "open-policy": {
    "name": "Open Policy",
    "question": "<p>Handelt es sich um eine &ouml;ffentliche Schule?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Ja"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Nein"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Ja",
      "Nein"
    ],
    "results": {
      "0": {
        "destination": "bundeslandschul"
      },
      "1": {
        "destination": "tragerschaftsch"
      }
    }
  },
  "ziel": {
    "name": "Ziel",
    "question": "<p>Was m&ouml;chtest du tun?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Eine Open Policy erstellen"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Erstellte Lehrmaterialien lizenzieren"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Eine Open Policy erstellen",
      "Erstellte Lehrmaterialien lizenzieren"
    ],
    "results": {
      "0": {
        "destination": "open-policy"
      },
      "1": {
        "destination": "lizenzieren"
      }
    }
  }
}

tree={
  "header": {
    "version": 0.1,
    "build_date": "2020-02-22",
    "logic_type": "jsonLogic version X",
    "owner": "Testperson",
    "tree_name": "Open Policy Generator",
    "tree_slug": "open-policy-generator",
    "start_node": "ziel",
    "vars": {}
  },
  "tragerschaftliz": {
    "name": "Tr\u00e4gerschaftLiz",
    "question": "<p>Ist dies eine staatliche oder private Schule?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Staatliche Schule"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Private Schule"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Staatliche Schule",
      "Private Schule"
    ],
    "results": {
      "0": {
        "destination": "vorgaben"
      },
      "1": {
        "destination": "privschule"
      }
    }
  },
  "vorgaben": {
    "name": "Vorgaben",
    "question": "<p>Gibt es zu OER und freien Lizenzen Vorgaben durch das Kultusministerium?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Nein"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Ja"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Nein",
      "Ja"
    ],
    "results": {
      "0": {
        "destination": "beschaftigung"
      },
      "1": {
        "destination": "kultussprechen"
      }
    }
  },
  "ziel": {
    "name": "Ziel",
    "question": "<p>Was m&ouml;chten Sie tun?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Erstellte Lehrmaterialien lizenzieren"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Eine Open Policy erstellen"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Erstellte Lehrmaterialien lizenzieren",
      "Eine Open Policy erstellen"
    ],
    "results": {
      "0": {
        "destination": "tragerschaftliz"
      },
      "1": {
        "destination": "tragerschaftpol"
      }
    }
  },
  "privschule": {
    "name": "PrivSchule",
    "question": "<p>Leider unterst&uuml;tzen wir momentan noch keine privaten Schulen. Demn&auml;chst erweitern wir die Funktionalit&auml;t.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": []
  },
  "beschaftigung": {
    "name": "Besch\u00e4ftigung",
    "question": "<p>Sind die Lehrer Angestellte oder Beamte oder gibt es auf der Schule sowohl Beamte als auch Angestellte?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Nur Angestellte"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Nur Beamte"
          ]
        },
        "1",
        {
          "==": [
            {
              "var": "answer"
            },
            "Sowohl Beamte als auch Angestellte"
          ]
        },
        "2"
      ]
    },
    "answers": [
      "Nur Angestellte",
      "Nur Beamte",
      "Sowohl Beamte als auch Angestellte"
    ],
    "results": {
      "0": {
        "destination": "lizenzverein"
      },
      "1": {
        "destination": "demnachst"
      },
      "2": {
        "destination": "demnachst"
      }
    }
  },
  "kultussprechen": {
    "name": "KultusSprechen",
    "question": "<p>Setzten Sie sich bitte mit dem Kultusministerium in Verbindung, um weitere Unters&uuml;tzung zu erhalten.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": []
  },
  "lizenzverein": {
    "name": "LizenzVerein",
    "question": "<p>Gibt es zwischen Lehrern und Schule Einigkeit &uuml;ber die Lizenz oder sollen verschiene Lizenzen m&ouml;glich sein?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Es besteht Einigkeit \u00fcber eine Lizenz"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Es sollen verschiedenen Lizenzen m\u00f6glich sein"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Es besteht Einigkeit \u00fcber eine Lizenz",
      "Es sollen verschiedenen Lizenzen m\u00f6glich sein"
    ],
    "results": {
      "0": {
        "destination": "ccart"
      },
      "1": {
        "destination": "demnachst"
      }
    }
  },
  "demnachst": {
    "name": "demn\u00e4chst",
    "question": "<p>Hier folgt demn&auml;chst mehr Inhalt.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": []
  },
  "ccart": {
    "name": "CCArt",
    "question": "<p>Soll die Lizenz CC BY, CC BY SA oder CC0 sein?<br>\nSind Ihnen die Unterschiede nicht bekannt? Dann erhalten Sie <a href=\"https://creativecommons.org/licenses/?lang=de\">hier</a> mehr Infos, bevor Sie diese Frage beantworten.</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "CC BY"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "CC BY SA"
          ]
        },
        "1",
        {
          "==": [
            {
              "var": "answer"
            },
            "CC0"
          ]
        },
        "2"
      ]
    },
    "answers": [
      "CC BY",
      "CC BY SA",
      "CC0"
    ],
    "results": {
      "0": {
        "destination": "namensnennung"
      },
      "1": {
        "destination": "demnachst"
      },
      "2": {
        "destination": "demnachst"
      }
    }
  },
  "namensnennung": {
    "name": "Namensnennung",
    "question": "<p>Wie soll die Namensnennung aussehen?</p>",
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
              "Name der Schule und Vor- und Nachname des Lehrers"
            ]
          ]
        },
        "0",
        {
          "in": [
            {
              "var": "answer"
            },
            [
              "Name der Schule",
              "Nachname des Lehrers",
              "Vor- und Nachname des Lehrers",
              "Name der Schule und Nachname des Lehrers"
            ]
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Name der Schule",
      "Nachname des Lehrers",
      "Vor- und Nachname des Lehrers",
      "Name der Schule und Nachname des Lehrers",
      "Name der Schule und Vor- und Nachname des Lehrers"
    ],
    "results": {
      "0": {
        "destination": "ergebnisliz"
      },
      "1": {
        "destination": "demnachst"
      }
    }
  },
  "ergebnisliz": {
    "name": "ErgebnisLiz",
    "question": "<p>Verwenden Sie bitte diese Lizenzkennzeichung und setzten Sie ihren Namen sowie den Namen ihrer Schule ein:</p>\n\n<p>Dieses Werk von Max-Mustermann-Schule, Erika Mustermann ist lizenziert unter einer <a href=\"http://creativecommons.org/licenses/by/4.0/\" rel=\"license\">Creative Commons Namensnennung 4.0 International Lizenz</a>.</p>",
    "input_type": "end_node",
    "end_node": true,
    "rules": {},
    "answers": []
  },
  "tragerschaftpol": {
    "name": "tr\u00e4gerschaftPol",
    "question": "<p>Ist dies eine staatliche oder private Schule?</p>",
    "input_type": "button",
    "end_node": false,
    "rules": {
      "if": [
        {
          "==": [
            {
              "var": "answer"
            },
            "Staatliche Schule"
          ]
        },
        "0",
        {
          "==": [
            {
              "var": "answer"
            },
            "Private Schule"
          ]
        },
        "1"
      ]
    },
    "answers": [
      "Staatliche Schule",
      "Private Schule"
    ],
    "results": {
      "0": {
        "destination": "bundesland"
      },
      "1": {
        "destination": "privschule"
      }
    }
  },
  "bundesland": {
    "name": "Bundesland",
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
              "Hamburg",
              "Baden W\u00fcrttemberg",
              "Bayern",
              "Berlin",
              "Brandenburg",
              "Bremen",
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
      "Hamburg",
      "Baden W\u00fcrttemberg",
      "Bayern",
      "Berlin",
      "Brandenburg",
      "Bremen",
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
        "destination": "demnachst"
      }
    }
  }
}

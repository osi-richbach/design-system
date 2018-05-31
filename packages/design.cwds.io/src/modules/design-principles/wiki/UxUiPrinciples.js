/* eslint-disable */

const React = require('react').default || require('react')
const { createElement, createFactory } = require('react')

module.exports = function({ factories={} }) {
  const {
    a = createFactory('a'),
    h2 = createFactory('h2'),
    li = createFactory('li'),
    p = createFactory('p'),
    ul = createFactory('ul'),
    wrapper = createFactory('div'),
  } = factories

  return wrapper({},

p({},
  "DRAFT",
),
h2({"id": "deletion-of-data-principles"},
  "deletion of data principles",
),
ul({},
  li({},
    "Clearly inform the user if and how they are effecting data in the database (i.e. deleting a record from the database, detaching information).",
  ),
  li({},
    "Make the user confirm destructive actions, as well as provide a failsafe (i.e. ‘cancel’).",
  ),
),
h2({"id": "save-and-autosave-principles"},
  "save and autosave principles",
),
ul({},
  li({},
    "Edit and save information on a card by card basis. If saving information on a card level while filling out a form, the data is saved locally. Once the user submits the form, the data will be saved to the database.",
  ),
  li({},
    "Autosave could be detrimental to optimistic concurrency. Unless it is tested, do not autosave.",
  ),
),
h2({"id": "optimistic-concurrency-principles"},
  "optimistic concurrency principles",
),
ul({},
  li({},
    "Inform users when they might be effected by optimistic concurrency before they are effected.",
  ),
  li({},
    "How to deal with data conflicts is still in progress.",
  ),
),
h2({"id": "error-vs-reward-messaging"},
  "error vs reward messaging",
),
ul({},
  li({},
    "Inform users about an error before failing.",
  ),
  li({},
    "Passively inform the user about successes (e.g. form successfully submitted, data saved).",
  ),
),
h2({"id": "iconography-guidelines"},
  "iconography guidelines",
),
ul({},
  li({},
    "Use vector over bitmap graphics.",
  ),
  li({},
    "Currently using the icon font ",
    a({"href": "http://fontawesome.io/"},
      "FontAwesome",
    ),
    ".",
  ),
)

  )
}

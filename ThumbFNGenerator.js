const MODS_WIHOUT_SHIFT = [
    "caps_lock",
    "left_command",
    "left_control",
    "left_alt",
    "right_command",
    "right_control",
    "right_alt",
];

// generates fn section for karabiner json, mostly to automate preserving shift modifier
// Usage: just plug it into web console
function swap(key, target) {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [{
                "key_code": target,
                "repeat": true
            }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "left_shift",
                    ],
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [{
                "key_code": target,
                "repeat": true,
                "modifiers": [
                    "left_shift"
                ]
            }],
            "type": "basic"
        },
    ];
}

const shiftedSwap = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [{
                "key_code": target,
                "repeat": true,
                "modifiers": [
                    "left_shift"
                ]
            }],
            "type": "basic"
        },
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "left_shift",
                    ],
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [{
                "key_code": target,
                "repeat": true
            }],
            "type": "basic"
        },
    ]
}

const func = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "fn",
                    ],
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [
            {
                "key_code": target,
                "repeat": true,
            }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "fn",
                        "left_shift",
                    ],
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [
            {
                "key_code": target,
                "repeat": true,
                "modifiers": [
                    "left_shift"
                ]
            }
            ],
            "type": "basic"
        },
    ]
}

const shiftedFunc = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "fn",
                    ],
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [
            {
                "key_code": target,
                "repeat": true,
                "modifiers": [
                    "left_shift"
                ]
            }
            ],
            "type": "basic"
        },
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "fn",
                        "left_shift",
                    ],
                    "optional": MODS_WIHOUT_SHIFT
                }
            },
            "to": [
            {
                "key_code": target,
                "repeat": true
            }
            ],
            "type": "basic"
        },
    ]
}

const holdTap = (source, hold, tap) => {
    return [
        {
            "type": "basic",
            "from": {
                "key_code": source,
                "modifiers": {
                    "optional": ["any"]
                },
            },
            "to": [
                {
                    "key_code": hold,
                    "lazy": true
                }
            ],
            "to_if_alone": [
                {
                    "key_code": tap
                }
            ],
        }
    ]
}

const makeRule = (name, rules) => {
    return {
        "description": name,
        "manipulators": rules
    }
}

// Plug console output into https://genesy.github.io/karabiner-complex-rules-generator/
const rules = [
    makeRule('Colemak-DH SpreadHand', [
        // Top
        ...swap('1', 'q'),
        ...swap('3', 'w'),
        ...swap('4', 'f'),
        ...swap('r', 'p'),
        ...swap('t', 'b'),
        // Right
        ...swap('i', 'j'),
        ...swap('o', 'l'),
        ...swap('0', 'u'),
        ...swap('hyphen', 'y'),
        ...shiftedSwap('equal_sign', 'semicolon'),

        // Home
        ...swap('q', 'a'),
        ...swap('w', 'r'),
        ...swap('e', 's'),
        ...swap('d', 't'),
        ...swap('f', 'g'),
        // Right
        ...swap('k', 'm'),
        ...swap('l', 'n'),
        ...swap('p', 'e'),
        ...swap('open_bracket', 'i'),
        ...swap('close_bracket', 'o'),

        // Bottom
        ...swap('caps_lock', 'z'),
        ...swap('a', 'x'),
        ...swap('s', 'c'),
        ...swap('x', 'd'),
        ...swap('c', 'v'),
        // Right
        ...swap('comma', 'k'),
        ...swap('period', 'h'),
        ...swap('semicolon', 'comma'),
        ...swap('quote', 'period'),
        ...swap('return_or_enter', 'slash'),

        // Extra
        ...shiftedSwap('delete_or_backspace', 'open_bracket'),
        ...swap('backslash', 'quote'),
    ]),
    makeRule('FN layer', [
        // Numbers, inverted shift
        ...shiftedFunc('1', '1'),
        ...shiftedFunc('3', '2'),
        ...shiftedFunc('4', '3'),
        ...shiftedFunc('r', '4'),
        ...shiftedFunc('t', '5'),
        ...shiftedFunc('i', '6'),
        ...shiftedFunc('o', '7'),
        ...shiftedFunc('0', '8'),
        ...shiftedFunc('hyphen', '9'),
        ...shiftedFunc('equal_sign', '0'),

        // Arrows on home row, preferring curl
        ...func('l', 'left_arrow'),
        ...func('semicolon', 'down_arrow'),
        ...func('p', 'up_arrow'),
        ...func('open_bracket', 'right_arrow'),

        // Other symbols on left home row
        ...func('q', 'grave_accent_and_tilde'),
        ...func('w', 'hyphen'),
        ...func('e', 'equal_sign'),
        ...func('d', 'close_bracket'),
        ...func('f', 'backslash'),
    ]),
    makeRule('Utility Thumbs + Left Pinky', [
        ...holdTap('spacebar', 'left_shift', 'spacebar'),
        ...holdTap('right_command', 'fn', 'delete_or_backspace'),
        ...holdTap('left_command', 'left_command', 'escape'),
        ...holdTap('right_option', 'right_control', 'return_or_enter'),
        ...holdTap('grave_accent_and_tilde', 'left_alt', 'tab')
    ]),
]

const json = {
    "title": "Colemak SpreadHand PowerThumb",
    rules
  }

  console.log(JSON.stringify(json))

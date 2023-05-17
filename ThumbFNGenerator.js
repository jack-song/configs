// generates fn section for karabiner json, mostly to automate preserving shift modifier
// Usage: just plug it into web console
const regularKeySwapRules = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "optional": [
                        "caps_lock",
                        "left_command",
                        "left_control",
                        "left_alt",
                        "right_command",
                        "right_control",
                        "right_alt",
                    ]
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
                    "optional": [
                        "caps_lock",
                        "left_command",
                        "left_control",
                        "left_alt",
                        "right_command",
                        "right_control",
                        "right_alt",
                    ]
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
    ]
}

const reverseShiftKeySwapRules = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "optional": [
                        "caps_lock",
                        "left_command",
                        "left_control",
                        "left_alt",
                        "right_command",
                        "right_control",
                        "right_alt",
                    ]
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
                    "optional": [
                        "caps_lock",
                        "left_command",
                        "left_control",
                        "left_alt",
                        "right_command",
                        "right_control",
                        "right_alt",
                    ]
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

const functionLayerRules = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "fn",
                    ],
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

const cmdOverrideRules = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "left_command",
                    ],
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

const shiftOverrideRules = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "left_shift",
                    ],
                    "optional": [
                        "left_command",
                    ]
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

const functionLayerShifts = (key, target) => {
    return [
        {
            "from": {
                "key_code": key,
                "modifiers": {
                    "mandatory": [
                        "fn",
                    ],
                }
            },
            "to": [
            {
                "key_code": target,
                "modifiers": [
                    "left_shift"
                ],
                "repeat": true
            }
            ],
            "type": "basic"
        },
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
    makeRule('Colemak-DH Wide Fat-Z', [
        // top
        // q unchanged
        // w unchanged
        ...regularKeySwapRules('e', 'f'),
        ...regularKeySwapRules('r', 'p'),
        ...regularKeySwapRules('t', 'b'),
        ...regularKeySwapRules('u', 'j'),
        ...regularKeySwapRules('i', 'l'),
        ...regularKeySwapRules('o', 'u'),
        ...regularKeySwapRules('p', 'y'),
        ...reverseShiftKeySwapRules('open_bracket', 'semicolon'),
        // top
        // a unchanged
        ...regularKeySwapRules('s', 'r'),
        ...regularKeySwapRules('d', 's'),
        ...regularKeySwapRules('f', 't'),
        // g unchanged
        ...regularKeySwapRules('j', 'm'),
        ...regularKeySwapRules('k', 'n'),
        ...regularKeySwapRules('l', 'e'),
        ...regularKeySwapRules('semicolon', 'i'),
        ...regularKeySwapRules('quote', 'o'),
        // bot
        ...regularKeySwapRules('left_shift', 'z'),
        ...regularKeySwapRules('z', 'x'),
        ...regularKeySwapRules('x', 'c'),
        ...regularKeySwapRules('c', 'd'),
        // v unchanged
        ...regularKeySwapRules('m', 'k'),
        ...regularKeySwapRules('comma', 'h'),
        ...regularKeySwapRules('period', 'comma'),
        ...regularKeySwapRules('slash', 'period'),
        ...regularKeySwapRules('right_shift', 'slash'),
        // right 2
        ...reverseShiftKeySwapRules('close_bracket', 'open_bracket'),
        ...regularKeySwapRules('return_or_enter', 'quote'),
    ]),
    makeRule('ThumbFN Wide Fat-Z', [
        // FN: num row on Q row
        ...functionLayerRules('q', '1'),
        ...functionLayerRules('w', '2'),
        ...functionLayerRules('e', '3'),
        ...functionLayerRules('r', '4'),
        ...functionLayerRules('t', '5'),
        // Skip y
        ...functionLayerRules('u', '6'),
        ...functionLayerRules('i', '7'),
        ...functionLayerRules('o', '8'),
        ...functionLayerRules('p', '9'),
        ...functionLayerRules('open_bracket', '0'),
        // FN: leftover symbols and arrows on home row
        ...functionLayerRules('a', 'close_bracket'),
        ...functionLayerRules('s', 'hyphen'),
        ...functionLayerShifts('d', 'hyphen'),
        ...functionLayerRules('f', 'equal_sign'),
        ...functionLayerShifts('g', 'equal_sign'),
        // skip h
        ...functionLayerRules('j', 'left_arrow'),
        ...functionLayerRules('k', 'down_arrow'),
        ...functionLayerRules('l', 'up_arrow'),
        ...functionLayerRules('semicolon', 'right_arrow'),
        ...functionLayerShifts('quote', 'close_bracket'),
        // FN: sym row on bot row
        // Start with left shift
        ...functionLayerShifts('left_shift', '1'),
        ...functionLayerShifts('z', '2'),
        ...functionLayerShifts('x', '3'),
        ...functionLayerShifts('c', '4'),
        ...functionLayerShifts('v', '5'),
        // skip b and n
        ...functionLayerShifts('m', '6'),
        ...functionLayerShifts('comma', '7'),
        ...functionLayerShifts('period', '8'),
        ...functionLayerShifts('slash', '9'),
        ...functionLayerShifts('right_shift', '0'),
        // Spacebar and side symbols
        ...functionLayerRules('spacebar', 'return_or_enter'),
        ...functionLayerShifts('tab', 'grave_accent_and_tilde'),
        ...functionLayerRules('caps_lock', 'grave_accent_and_tilde'),
        ...functionLayerShifts('close_bracket', 'backslash'),
        ...functionLayerRules('return_or_enter', 'backslash'),
    ]),
    makeRule('Utility and thumb keys', [
        ...regularKeySwapRules('caps_lock', 'left_command'),
        // shift(lcmd) space - esc(tilde)
        ...regularKeySwapRules('left_command', 'left_shift'),
        ...regularKeySwapRules('grave_accent_and_tilde', 'escape'),
        // backspace(rcmd) fn(ralt) - enter(backslash)
        ...regularKeySwapRules('right_command', 'delete_or_backspace'),
        ...regularKeySwapRules('right_alt', 'fn'), 
        ...regularKeySwapRules('backslash', 'return_or_enter'),
            // {
            //     "type": "basic",
            //     "from": {
            //         "key_code": "left_command"
            //     },
            //     "to_if_alone": [
            //         {
            //             "key_code": "escape"
            //         }
            //     ],
            //     "to": [
            //         {
            //             "key_code": "left_shift"
            //         }
            //     ]
            // },
            // {
            //     "type": "basic",
            //     "from": {
            //         "key_code": "right_command"
            //     },
            //     "to_if_alone": [
            //         {
            //             "key_code": "delete_or_backspace"
            //         }
            //     ],
            //     "to": [
            //         {
            //             "key_code": "fn"
            //         }
            //     ]
            //   },
    ]),
    makeRule('Left hand shift keys', [
        ...shiftOverrideRules('grave_accent_and_tilde', 'return_or_enter'),
        ...shiftOverrideRules('caps_lock', 'delete_forward'),
    ]),
    // makeRule('MegaFN', [
    //     // FN: num row on Q row
    //     ...functionLayerRules('q', '1'),
    //     ...functionLayerRules('w', '2'),
    //     ...functionLayerRules('e', '3'),
    //     ...functionLayerRules('r', '4'),
    //     ...functionLayerRules('t', '5'),
    //     ...functionLayerRules('y', '6'),
    //     ...functionLayerRules('u', '7'),
    //     ...functionLayerRules('i', '8'),
    //     ...functionLayerRules('o', '9'),
    //     ...functionLayerRules('p', '0'),
    //     // FN: sym row on home row
    //     ...functionLayerShifts('a', '1'),
    //     ...functionLayerShifts('s', '2'),
    //     ...functionLayerShifts('d', '3'),
    //     ...functionLayerShifts('f', '4'),
    //     ...functionLayerShifts('g', '5'),
    //     ...functionLayerShifts('h', '6'),
    //     ...functionLayerShifts('j', '7'),
    //     ...functionLayerShifts('k', '8'),
    //     ...functionLayerShifts('l', '9'),
    //     ...functionLayerShifts('semicolon', '0'),
    //     // FN: leftover symbols
    //     ...functionLayerRules('z', 'grave_accent_and_tilde'),
    //     ...functionLayerShifts('x', 'grave_accent_and_tilde'),
    //     ...functionLayerRules('c', 'hyphen'),
    //     ...functionLayerShifts('v', 'hyphen'),
    //     ...functionLayerRules('b', 'close_bracket'),
    //     ...functionLayerShifts('n', 'close_bracket'),
    //     ...functionLayerRules('m', 'equal_sign'),
    //     ...functionLayerShifts('comma', 'equal_sign'),
    //     ...functionLayerRules('period', 'backslash'),
    //     ...functionLayerShifts('slash', 'backslash'),
    // ]),
    // makeRule('CMD VIM Arrow Keys', [
    //     ...cmdOverrideRules('h', 'left_arrow'),
    //     ...cmdOverrideRules('j', 'down_arrow'),
    //     ...cmdOverrideRules('k', 'up_arrow'),
    //     ...cmdOverrideRules('l', 'right_arrow'),
    // ]),
]

const json = {
    "title": "Colemak WideZ ThumbFN",
    rules
  }

  console.log(JSON.stringify(json))

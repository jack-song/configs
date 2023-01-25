; arrows
Ins & h::
If GetKeyState("Shift", "P")
	Send +{Left}
Else
	Send {Left}
Return

Ins & j::
If GetKeyState("Shift", "P")
	Send +{Down}
Else
	Send {Down}
Return

Ins & k::
If GetKeyState("Shift", "P")
	Send +{Up}
Else
	Send {Up}
Return

Ins & l::
If GetKeyState("Shift", "P")
	Send +{Right}
Else
	Send {Right}
Return

; specials
Ins & u::
If GetKeyState("Shift", "P")
	Send +{'}
Else
	Send {'}
Return

Ins & i::
If GetKeyState("Shift", "P")
	Send +{[}
Else
	Send {[}
Return

Ins & o::
If GetKeyState("Shift", "P")
	Send +{]}
Else
	Send {]}
Return

Ins & p::
If GetKeyState("Shift", "P")
	Send +{\}
Else
	Send {\}
Return

; nothing by default
Ins::Return

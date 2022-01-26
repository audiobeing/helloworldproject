# estuary/tidalCycles
## intro

Tidal is a domain-specific programming language (DSL) for creating music that focuses on the creation and manipulation of patterns. 

Estuary is a project that ports tidalCycles to the web (as well as other languages)

- it is smaller than tidalCycles
- aims for easy collaboration and setup (see more about estuary on estuary.mcmaster.ca)


## overview
1. start/stop making sound
1. creating patterns/sequences
1. adding effects
1. transforming patterns
1. handling large audio files


## 1. **start/stop sounds and sequences**
`s "bd cp"`

<!-- move to tidal later: TidalCycles in Atom: `Shift+Enter` for single line, `Ctrl+Enter` for multiple lines.  -->

Press the play button or press `Shift+Enter` (Enter or Return)

`-- s "bd cp"`

the double dash infront of a line of code 'comments out' the code - then execute (same as above)

or we can select all the code, delete it and execute. undo to get the code back. 

### `Syntax`
- when you see this by your editing window it means there is an error

## 2. **creating patterns/sequences**

adding `~` creates a rest/silence

`s "bd ~ bd cp"`

add more sounds 

`sound "bd bd hh bd sn bd hh bd"`

what is happening here?

each sound takes up and equal space in the cycle

<br/>
<img src="assets/tidal-cycles.png" alt="drawing" width="70%" />
<br/>

try adding `*#` & `/#`

`s "bd*4"`

the `*` fills the unit/section of the cycle for the related sample (this case `bd`) with `#` of that sample. 

`s "bd*4 hh*2"`

in this case the `bd` and `hh` split the cycle into two, and the `*#` fills the section accordingly - in the first half of the cycle there are `4` `bd` samples in the second half there are `2` `hh` samples. 

`s "bd/2 hh*3"`

- the `/#` is slightly different in that it effects future cycles - in the example above the `bd` sample will skip every second cycle, thus if it was 3 is would play once every three cycles (on the first cycle of every three), and so on ...

add `?` for some randomness

`s "hh*16?"`

`?`: 50/50 chance each of the 16 sections of the cycle will occur - the unit that is to the left of the `?`

choose a sample from the sound `bank` using `:#`

`s "bd:2 bd:1 hh:0 bd sn bd:3 hh:2 hh:2"`

thus far we have been refering to the name written as the sample (`bd`,`hh`,`sn`, ...). this actually refers to the first sample in the sound `bank` named `bd` and so in. a `bank` is a folder that holds one or more samples 

fit a subsequence into a step/section with square brackets:

`s "bd [bd cp] bd bd"`

notice how the square brakets demark the section of the cycle for which the `bd` & `cp` then fill that section equally

`s "[bd bd sn:5] [bd sn:3]"`

you can nest subsequences

`s "[[bd bd] bd sn:5] [bd sn:3]"`

and so on ...

`s "[[bd [bd bd bd bd]] bd sn:5] [bd sn:3]"`


play two subsequences at once by separating with a comma - thus we have two cycles of sequences playing at the at the same time

`s "[voodoo voodoo:3, arpy arpy:4 arpy:2]"`

### we can change the cps (cycles per second) or bpm (beats per minute) in the estuary console

`!setcps 0.5` 

- this is the default: one cycle = 2 seconds

`!setbmp 60` 
- 1 beat per second (tempo in traditional music notation)

### take a few moments to explore some other sounds
#### short samples
- variations on a theme (usualy percussion): `bd`, `sn`, `ht` 
- full kit in the bank/folder: `odx`
- phrase chopped up: `bip`, `tabla`, `auto`, `amencutup`
- scales chopped up: `arpy`, `latibro`
- more: `flick sid can metal future gabba sn mouth co gretsch mt arp h cp cr newnotes bass hc tabla bass0 hh bass1 bass2 oc bass3 ho odx diphone2 house off ht tink perc bd industrial pluck trump printshort jazz voodoo birds3 procshort blip drum jvbass psr wobble`

for a list of current (2022-01-20) sample list in estuary go [here](misc/estuarysamplelist.md). most have the number of samples in each `bank`. also check estuary reference for accessing this list from estuary

## II. **adding effects**

`s "bd sn:2  bd:2 hh*2" # vowel "a"`

`s "bd sn:2  bd:2 hh*2" # vowel "a e i o u"`

the pattern comes from the left side

`s "bd sn:2  bd:2 hh*2" # pan "0 0.25 0.75 1"`

pan is between 0 and 1

`s "bd sn:2  bd:2 hh*2" # speed "2 0.25 0.75 1"`


`s "bd sn:2  bd:2 hh*2" # gain "1 0.25 0.75 1"`


## IV. transforming patterns

slow it down

`slow 2 $ s "[bd sn:2, hh*3 hh:3*2]"`

speed it up

`fast 2 $ s"[bd sn:2, hh hh:2*2]"`

have it happen every # cycles

`every 4 (fast 2) $ s "bd [~ sn]"`

## VI. longer samples and granulation(ish)

some long samples (`koy sax ade alex bev pad`)

`s "bev"` get ready to stop this example as will quickly get over saturated

notice that when you stop it, it keeps playing - every cycle the sample is triggered so quickly we have many iterations of the sample play ontop of each other

lets slow it down

`slow 8 $ s "bev"`

if you left the `cps` at `0.5` that means that each cycle takes 2 seconds. as the `bev` sample fits nices into into the `slow 8` timeframe we can workout that the sample is roughly 16 seconds long. try changing cps to 1 and check if you need to slow it down to `16` to fit? 

put `!setcps 1` in the estuary terminal to check

make sure to set cps back to `0.5` to keep in time with this tutorial: `!setcps 0.5`

`chop` the sample into equal bits:

`chop 32 $ s "bev"`

`chop` divides the sample into `#` equal sections of length and then plays the `#` of sections in the appropriate section of the cycle (in this case play `32` in one cycle)

`chop 8 $ s "future ~ gabba*2 newnotes`

lets return to the `bev` sample (actually the first, 0th sample in the sample `bank` named `bev`) and slow it down to fit 8 cycles:

`loopAt 8 $ chop 128 $ s "bev"`

### transform the grain pattern:

`rev $ loopAt 8 $ chop 128 $ s "bev"`

### striate vs chop

`slow 4 $ chop 4 $ s "arpy:1 arpy:2 arpy:3 arpy:4"`

`slow 4 $ striate 4 $ s "arpy:1 arpy:2 arpy:3 arpy:4"`

## Arbitrariness and 'random numbers'

#### randslice
`randslice 1128 $ s "bev*16"`

#### random sample
`s "arpy*8" # n (irand 16)`

#### degradeBy
`degradeBy 0.5 $ s "bd sn cp sn:2"`

## VII. collaborative strategies






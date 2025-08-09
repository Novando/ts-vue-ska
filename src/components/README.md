# components
Think of reusable items, all UI item that have familiarity should be declared here

## Atomic Design Pattern
Component viewed as a living thing, which each having an atoms and molecules to form a organism. Each level may not use their siblings

### atoms
The smallest component, that can no longer be divided to smaller component nor import other atoms (eg. button, label, badge, etc)

### molecules
Contain multiple atoms to define more meaningful component (eg. card, input group, toast, etc)

### organism
The most concrete component, can contain multiple atoms and molecules (eg. footer section, form, navbar, etc)

### svgs
A special component that could be directly used everywhere but their siblings 
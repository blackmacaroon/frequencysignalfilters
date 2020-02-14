# frequencysignalfilters

Someties it is necessare to filter a signal by frequency, e.g. to reducce noise outside of the xpeccted frequency range. Filters can be stacked, allowing only the frequencies withing the range allowed by ALL filters to pass through. For example, 3 filters with ranges of (10, 17), (13, 15), (13, 17) will only allow signals between 13 and 15 through. The only range that all filters overlap is (13-15). Given n signals frequencies and a series of m filters, in the range x to y, inclusively, determine the number of signals that will get through the filters.

## for example

given n = 5 signals with frequencies = [8, 15, 14, 16, 21] adn m 3 filterRanges= [[10,17], [13,15], [13,17]], the two frequencies that will pass through all filters are 15 and 14.
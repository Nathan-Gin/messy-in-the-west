// bullet sound effect : Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=84818">freesound_community</a> from <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=84818">Pixabay</a>
let canvas;
let context;

let fpsInterval = 1000 / 30;
let now;
let then = Date.now();

let request_id;
let background

let xhttp;

let normalStage = [
    [1808, 1808, 1808, 1808, 1808, 54, 55, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 635, 635, 635, 635, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 102, 103, 104, 105, 106, 107, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 151, 152, 153, 154, 155, 156, 157, 158, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1484, 1485, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 201, 202, 203, 204, 205, 206, 207, 208, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1533, 1534, 1535, 1536, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 251, 252, 253, 254, 255, 256, 257, 258, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1583, 1584, 1585, 1586, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 302, 303, 304, 305, 306, 307, 1808, 1808, 1808, 1808, 1808, 1557, 1558, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1633, 1634, 1635, 1636, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 352, 353, 354, 355, 356, 357, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1684, 1685, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 402, 403, 404, 405, 406, 407, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1734, 1735, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 452, 453, 454, 455, 456, 457, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],    
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 606, 607, 608, 609, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 1808, 1808, 1808, 1808, 1808, 1808, 1305, 1306, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 1808, 1808, 1808, 1808, 1808, 1808, 1355, 1356, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1505, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1555, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1856, 1857, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1857, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1484, 1485, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1303, 1304, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1533, 1534, 1535, 1536, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1583, 1584, 1585, 1586, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1633, 1634, 1635, 1636, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1684, 1685, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1734, 1735, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1505, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808],
    [1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1856, 1857, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1555, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1808, 1303, 1304, 1808],
    [1878, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1879, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1880, 1881], 
    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

let bossStage =  [
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1818, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1818, 2, 2],
    [2, 2, 1866, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1868, 2, 2],
    [2, 2, 2, 1866, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1868, 2, 2, 2],
    [2, 2, 2, 2, 1866, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1868, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 1866, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1868, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 1866, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 635, 635, 635, 635, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 1867, 2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 635, 635, 635, 635, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]]
let currentLevel = 1;

let tilesPerRow = 50;
let tileSize = 16;

let backgroundImage = new Image();
let obstacles = [];
let font = new Image();


let player = {
    x : 0,
    y : 0,
    height : 44,
    width : 48,
    healthBarWidth : 24,
    healthBarHeight : 4,
    xChange : 5,
    yChange: 5,
    health: 100,
    ammo: 6,
    frameX: 0,
    frameY: 0,
    obstacleLeft : false,
    obstacleRight : false,
    obstacleAbove : false,
    obstacleBelow : false,
    unlimitedBullets : false,
    unlimitedBulletsTimer : 0,
    superSpeed : false,
    superSpeedTimer : 0,
    dodge : false,
    dodgeCooldown : 0,
    dodgeBoost : 0,
    invincible : false,
    invincibleFrames : 0,
    score : 0,
    godmode : false,
    freeFire : false
}

let bullets = [];
let shot = false;
let playerReload = false;
let reloadDelay; 
let shotAnimation;
let playerBack = new Image();
let playerFront = new Image();
let playerSide = new Image();
let playerLeftSide = new Image();
let currentImage = new Image();
// let playerHealthElement;
// let playerAmmoElement;
let playerScoreElement
let playerGodElement
let playerBullElement

let items = new Image();
let droppedItems = [];

let enemies = [];
let enemyProjectiles = [];
let cayoteProjectiles = [];
let agisProjectiles = [];
let cactusSide = new Image();
let cactusLeftSide = new Image();
let cactusBack = new Image();
let cactusFront = new Image();
let coffinSide = new Image();
let coffinBack = new Image();
let coffinFront = new Image();
let coffinLeftSide = new Image();
let cayoteSide = new Image();
let cayoteBack = new Image();
let cayoteFront = new Image();
let cayoteLeftSide = new Image();
let agisImage = new Image();
let effects = new Image();
let backgroundMusic = new Audio();
let bossMusic = new Audio;
let currentTrack 
let bulletSound = new Audio();

let moveLeft = false;
let moveUp = false;
let moveRight = false;
let moveDown = false;
let shootUp = false;
let shootDown = false;
let shootLeft = false;
let shootRight = false;
let gunShot = false;
let lastPositionLeft = false;

document.addEventListener("DOMContentLoaded", init, false) ;

function init() {
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d") ;
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height /2 + 80;
    window.addEventListener("keydown", activate, false);
    window.addEventListener("keyup", deactivate, false);
    window.addEventListener("keydown", shoot, false);
    window.addEventListener("keyup", deshoot, false);
    window.addEventListener("keydown", reload, false);
    window.addEventListener("keydown", dodge, false);
    window.addEventListener("keydown", cheats, false);
    load_assets([
        {"var": playerFront, "url" : "static/sprites/Player/PlayerFront.png"},
        {"var": playerBack, "url" : "static/sprites/Player/PlayerBack.png"},
        {"var": playerSide, "url" : "static/sprites/Player/PlayerSide.png"},
        {"var": playerLeftSide, "url" : "static/sprites/Player/PlayerLeftSide.png"},
        {"var": cactusFront, "url" : "static/sprites/Mobs/Cactus/CactusFront.png"},
        {"var": cactusBack, "url" : "static/sprites/Mobs/Cactus/CactusBack.png"},
        {"var": cactusSide, "url" : "static/sprites/Mobs/Cactus/CactusSide.png"},
        {"var": cactusLeftSide, "url" : "static/sprites/Mobs/Cactus/CactusLeftSide.png"},
        {"var": coffinBack, "url" : "static/sprites/Mobs/Coffin/CoffinBack.png"},
        {"var": coffinFront, "url" : "static/sprites/Mobs/Coffin/CoffinFront.png"},
        {"var": coffinSide, "url" : "static/sprites/Mobs/Coffin/CoffinSide.png"},
        {"var": coffinLeftSide, "url" : "static/sprites/Mobs/Coffin/CoffinLeftSide.png"},
        {"var": cayoteBack, "url" : "static/sprites/Mobs/Coyote/CoyoteBack.png"},
        {"var": cayoteFront, "url" : "static/sprites/Mobs/Coyote/CoyoteFront.png"},
        {"var": cayoteSide, "url" : "static/sprites/Mobs/Coyote/CoyoteSide.png"},
        {"var": cayoteLeftSide, "url" : "static/sprites/Mobs/Coyote/CoyoteLeftSide.png"},
        {"var": backgroundImage, "url" : "static/sprites/Atlas.png"},
        {"var": font, "url" : "static/sprites/Font/Font.png"},
        {"var": items, "url" : "static/sprites/items/items.png"},
        {"var": effects, "url" : "static/sprites/FX/effects.png"},
        {"var": agisImage, "url" : "static/sprites/Mobs/Agis/Agis.png"},
        {"var" : backgroundMusic, "url": "static/backgroundMusic.mp3"},
        {"var" : bossMusic, "url": "static/boss.mp3"},
        {"var": bulletSound, "url": "static/shot.mp3"}


    ])
    
    background = normalStage;
    // background = bossStage;
    // currentLevel = 4;
    tileInit(background, obstacles, droppedItems)
    levelInit(currentLevel, droppedItems)
    currentImage = playerFront;
    currentTrack = backgroundMusic;
    currentTrack.play() //how to play audio: (whole video) https://www.youtube.com/watch?v=p4OHVJxd2FI
    
    playerScoreElement = document.querySelector("#score");
    playerScoreElement.innerHTML = "Score: " + player.score;

    playerGodElement = document.querySelector("#god");
    playerGodElement.innerHTML = "Godmode: " + player.godmode ;

    playerBullElement = document.querySelector("#bull");
    playerBullElement.innerHTML = " Unlimited Bullets: " + player.freeFire;

    
    draw();
}

function draw() {
    request_id = window.requestAnimationFrame(draw);
    let now = Date.now();
    let elapsed = now - then;  
    if (elapsed <= fpsInterval){
        return;
    }
    then = now -(elapsed % fpsInterval);

    if (player.health <= 0){
        stop('YOU LOSE!')
    }
    if (enemies.length === 0 && currentLevel === 4){
        stop('CONGRATS YOU WIN!!!!')
    }
    if (enemies.length <= 0 && currentLevel < 3){
        currentLevel += 1;
        levelInit(currentLevel);
    }

    //cheats
    playerGodElement.innerHTML = "Godmode: " + player.godmode ;
    playerBullElement.innerHTML = " Unlimited Bullets: " + player.freeFire;


    if (playerReload && (now >= reloadDelay)){
        playerReload = false;
        player.ammo = 6;
        // playerAmmoElement.innerHTML = "Ammo: " + player.ammo + "/6";
    } else if (playerReload){
        // playerAmmoElement.innerHTML = "Ammo: " + "Reloading";
    }

    if (enemies.length <= 0 && currentLevel === 3){
        if(player.y <= 3){
            currentLevel += 1;
            background = bossStage;
            enterBoss(currentLevel, background, obstacles, droppedItems)
        }
        
    }

    // Draw background on canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    if(currentLevel != 4){
        context.fillStyle = "#eeca84"; 
    }else{
        context.fillStyle = "#a0d780"
    }

    context.fillRect(0, 0, canvas.width, canvas.height);

    for (let r = 0; r < 32; r +=1) {
        for (let c = 0; c < 50; c +=1) {
            let tile = background[r][c];
            if (tile >= 0) {
                let tileRow = Math.floor(tile / tilesPerRow);
                let tileCol = Math.floor(tile % tilesPerRow);
                context.drawImage(
                    backgroundImage,
                    tileCol * tileSize, tileRow * tileSize, tileSize, tileSize,
                    c * tileSize, r * tileSize, tileSize, tileSize
                );
            }
        }
    }

    if (enemies.length <= 0 && currentLevel === 3){
        context.drawImage(backgroundImage,
            0, 16, 16, 16,
            canvas.width / 2 - 16, 16, 16, 16
        );
        context.drawImage(backgroundImage,
            0, 32, 16, 16,
            canvas.width / 2 -16 , 32, 16, 16
        );
        context.drawImage(backgroundImage,
            16, 16, 16, 16,
            canvas.width / 2 , 16, 16, 16
        );
        context.drawImage(backgroundImage,
            16, 32, 16, 16,
            canvas.width / 2 , 32, 16, 16
        );
    }
    


    //Draw Player
    let playerCenterX = player.x + (player.width / 2);
    let playerCenterY = player.y + (player.height / 2);
    // context.fillStyle = "blue"; 
    // context.fillRect(player.x, player.y, player.width, player.height);
    context.fillStyle = "black";
    context.fillRect(player.x + player.width / 4, player.y + player.height + 1, player.healthBarWidth, player.healthBarHeight)
    context.fillStyle = "green";
    if (player.health <= 20){
        context.fillStyle = "red";
    }
    context.fillRect(player.x + player.width / 4, player.y + player.height + 1,  player.healthBarWidth * (player.health / 100), player.healthBarHeight)

    if (player.ammo >= 1){
        context.drawImage(font,
            player.ammo * 11, 50, 11, 10,
            player.x + (player.width / 8), player.y -11, 11, 10
        );
        context.drawImage(font,
            77, 50, 11, 10,
            player.x + (player.width / 8)+ 11, player.y -11, 11, 10
        );
        context.drawImage(font,
            66, 50, 11, 10,
            player.x + (player.width / 8) + 22, player.y -11, 11, 10
        );
    }else{
        context.drawImage(font,
            0, 40, 99, 10,
            player.x - 24, player.y -11, 99, 10
        )
    }

    if(shot){ // ensures the shooting animation takes priority
        player.frameX = 3
        player.frameY = 2;
        context.drawImage(currentImage,
            player.frameX * player.width, player.frameY * player.height, player.width, player.height,
            player.x, player.y, player.width, player.height
        );
        player.frameX = 0;
        shootLeft = false;
        shootRight = false;
        shootUp = false;
        shootDown = false;
        shot = false;
        gunShot = false;
    }else if( moveUp || moveDown || moveRight || moveLeft ){
        lastPositionLeft = false
        context.drawImage(currentImage,
            player.frameX * player.width, player.frameY * player.height, player.width, player.height,
            player.x, player.y, player.width, player.height
        );
    } else {
        player.frameY = 0;
        context.drawImage(currentImage,
            player.frameX * player.width, player.frameY * player.height, player.width, player.height,
            player.x, player.y, player.width, player.height
        );
    
    }


    if (moveRight && !(moveLeft && moveRight)) {
        currentImage = playerSide;
        player.frameY = 1
        player.frameX = (player.frameX + 1) % 6;
    }

    if (moveLeft && !(moveLeft && moveRight)) {
        currentImage = playerLeftSide;
        player.frameY = 1
        player.frameX = (player.frameX + 1) % 6;
    }

    if (moveUp && !(moveUp && moveDown)){
        currentImage = playerBack;
        player.frameY = 1
        player.frameX = (player.frameX + 1) % 6;
    }
    if (moveDown && !(moveUp && moveDown)){
        currentImage = playerFront;
        player.frameY = 1;
        player.frameX = (player.frameX + 1) % 6;
    }
    //Draw other objects



    //bullets
    context.fillStyle = 'yellow';
    for ( let i = 0; i < bullets.length; i += 1 ){
        let b = bullets[i]
        if (b.x + b.width < 0 ||
            b.x > canvas.width ||
            b.y + b.height < 0 ||
            b.y > canvas.height ){
                bullets.splice(i, 1); // splice taken from (had to scroll down for a while) : https://www.w3schools.com/js/js_array_methods.asp
                i -= 1 // // Taken from ChatGPT as I couldn't figure this specific part out (Because an item is removed the index changes)
        }else{
            context.fillRect(b.x, b.y, b.width, b.height);
            for ( let eI = 0; eI < enemies.length; eI += 1) {
                let e = enemies[eI]
                if (enemyCollides(b, e)){
                    e.health -= 50;
                    bullets.splice(i, 1); // splice taken from (had to scroll down for a while) : https://www.w3schools.com/js/js_array_methods.asp
                    i -= 1 // Taken from ChatGPT as I couldn't figure this out 
                    if (e.health <= 0){
                        e.frameY = 3;
                        e.frameX = 0; 
                        let image = e.enemyCurrentImage
                        if (e.type === 'cactus'){
                            image = e.cactusImage;
                        }
                        context.drawImage(image,
                            e.frameX * e.width, e.frameY * e.height, e.width, e.height,
                            e.x, e.y, e.width, e.height
                        );
                        if (e.item <= 3){
                            let newItem = {
                                x : e.x + (e.width / 2),
                                y: e.y + (e.height / 2),
                                width : 16,
                                height : 16,
                                itemNum : e.item
                            }
                            droppedItems.push(newItem)
                        }
                        player.score += e.score;
                        playerScoreElement.innerHTML = "Score: " + player.score;
                        enemies.splice(eI, 1);
                        eI -= 1;
                    }
                    break // break taken from : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break
                }
            }
            b.x += b.xChange;
            b.y += b.yChange;
        }
    }

    //items
    for (let i = 0; i < droppedItems.length; i += 1){
        let currentItem = droppedItems[i];
        if(enemyCollides(player, currentItem)){
            if (currentItem.itemNum === 0){
                if(player.health + 20 >= 100){
                    player.health = 100;
                }else{
                    player.health += 20;
                }
                // playerHealthElement.innerHTML = "Health: " + player.health;
            } else if(currentItem.itemNum === 1){
                if(player.health + 10 >= 100){
                    player.health = 100;
                }else{
                    player.health += 10;
                }
                // playerHealthElement.innerHTML = "Health: " + player.health;
            }else if(currentItem.itemNum === 2){
                player.superSpeed = true;
                player.superSpeedTimer = 0;
            }else if (currentItem.itemNum === 3){
                player.unlimitedBullets = true;
                player.unlimitedBulletsTimer = 0;
            }
            droppedItems.splice(i, 1);
            i -= 1;
        }else{
            context.drawImage(items,
                currentItem.itemNum * 16, 0, currentItem.width, currentItem.height,
                currentItem.x, currentItem.y, currentItem.width, currentItem.height
            )
        }
    }
    //power ups
    if(player.superSpeed){
        context.drawImage(items,
            32, 0, 16, 16,
            player.x + player.width - 10, player.y + (player.height *0.25), 8, 8
        )
        player.superSpeedTimer += 1;
        if (player.superSpeedTimer >= 100){
            player.superSpeed = false;
        }
    }

    if (player.unlimitedBullets){
        context.drawImage(items,
            48, 0, 16, 16,
            player.x + player.width - 10, player.y + (player.height *0.5), 8, 8
        )
        player.unlimitedBulletsTimer += 1;
        player.ammo = 6;
        if(player.unlimitedBulletsTimer >= 200){
            player.unlimitedBullets = false
        }
    }

    // dodge
    if (player.dodge){
        if (player.invincibleFrames <= 1){
            player.dodgeBoost = 10;
        }else{
            player.dodgeBoost = 0;
        }
        player.invincibleFrames += 1
        player.invincible = true;
        if(player.invincibleFrames >= 30){
            player.invincible = false;
            player.dodgeCooldown += 1
        }
        if (player.dodgeCooldown >= 30){
            player.dodge = false;
            player.dodgeCooldown = 0;
            player.invincibleFrames = 0
        }else if (player.dodgeCooldown > 0 && player.dodgeCooldown <= 30){
            context.fillStyle = "purple";
            context.fillRect(player.x + player.width / 4, player.y + player.height + 2 + player.healthBarHeight,  player.healthBarWidth * (player.dodgeCooldown / 30), player.healthBarHeight)
        }
    }

    if(player.invincible){
        context.drawImage(items,
            64, 0, 16, 16,
            player.x + player.width - 10, player.y + (player.height *0.75), 8, 8
        )
    }

    //enemy projectiles
    context.fillStyle = 'red';
    for ( let i = 0; i < enemyProjectiles.length; i += 1 ){
        let p = enemyProjectiles[i];
        if (p.x + p.width < 0 ||
            p.x >= canvas.width ||
            p.y + p.height < 0 ||
            p.y >= canvas.height ){
                enemyProjectiles.splice(i, 1); // splice taken from (had to scroll down for a while) : https://www.w3schools.com/js/js_array_methods.asp
                i -= 1 // // Taken from ChatGPT as I couldn't figure this specific part out (Because an item is removed the index changes
        }else if(enemyCollides(player, p)){
            enemyProjectiles.splice(i, 1); 
            i -= 1;
            if (!player.invincible && !player.godmode){
                player.health -=20;
            }
            // playerGodModeElement.innerHTML = "Godmode " + player.health;
        }else{
            context.fillRect(p.x, p.y, p.width, p.height);
            p.x += p.xChange;
            p.y += p.yChange;
        }
            
        
    }

    //cayote projectiles
    for (let i = 0; i < cayoteProjectiles.length; i += 1){
        let p = cayoteProjectiles[i]
        p.timer += 1
        if (p.x + p.width < 0 ||
            p.x >= canvas.width ||
            p.y + p.height < 0 ||
            p.y >= canvas.height ){
                cayoteProjectiles.splice(i, 1); // splice taken from (had to scroll down for a while) : https://www.w3schools.com/js/js_array_methods.asp
                i -= 1
        }else if(enemyCollides(player, p)){
            cayoteProjectiles.splice(i, 1); 
            i -= 1;
            if(!player.invincible && !player.godmode){
                player.health -=10;
            }
            // playerHealthElement.innerHTML = "Health: " + player.health;
        }else if(p.timer >= 150){
            cayoteProjectiles.splice(i, 1); 
            i -= 1;
        }else{
            let Xchange;
            let Ychange;
            context.fillStyle = '#f75608'
            context.fillRect(p.x, p.y, p.width, p.height);
            if (p.x > player.x + p.width){
                Xchange = -1 * p.xChange;
            }else{
                Xchange = p.xChange;
            }

            if (p.y > player.y + player.height){
                Ychange = -1 * p.yChange;
            }else{
                Ychange = p.yChange
            }
            p.x += Xchange;
            p.y += Ychange; 
        }
    }

    //agis projetiles
    for (let i = 0; i < agisProjectiles.length; i += 1){
        let p = agisProjectiles[i]
        if (p.x < 0 || p.x + p.size >= canvas.width){
            p.xChange = -1 * p.xChange 
            p.bounce += 1
        }
        if (p.y < 0 || p.y + p.size >= canvas.height){
            p.yChange = -1 * p.xChange 
            p.bounce += 1
        }
        if(enemyCollides(player, p)){
            agisProjectiles.splice(i, 1); 
            i -= 1;
            if(!player.invincible && !player.godmode){
                player.health -= 5  ;
            }
        }else if(p.bounce >= 5){
            agisProjectiles.splice(i, 1); 
            i -= 1;
        }else{
            p.x += p.xChange;
            p.y+= p.yChange;
            context.fillStyle = '#de138c'
            context.fillRect(p.x, p.y, p.size, p.size);
        }
    }
    
    //enemies
    for ( let i = 0; i < enemies.length; i += 1) { // .length method found from : https://www.w3schools.com/jsref/jsref_length_array.asp
        let e = enemies[i]
        let enemyCenterX = e.x + (e.width / 2);
        let enemyCenterY = e.y + (e.height / 2);
        if (e.type === 'coffin'){
            e.frameY = 1
            if (enemyCollidesCenterPLayer(player, e) && (! e.attack)){
                e.attack = true;
            }
            if (e.attack){
                e.frameY = 2;
                if(! e.startedAttack){
                    e.frameX = 0;
                    e.startedAttack = true;
                }
                if (e.attackSpeed === 0){
                e.frameX += 1;
                }
                e.attackSpeed = (e.attackSpeed + 1) % 5; // frames were going to fast so delay the drawing (come back to and test speeds)

                if (e.frameX === 4){
                    if (enemyAttackPLayer(player, e)){
                        if(!player.invincible && !player.godmode){
                        player.health -= 1;
                        }
                        // playerHealthElement.innerHTML = "Health: " + player.health;
                    }
                }
                
                if (e.frameX === 13){
                    e.attack = false;
                    e.startedAttack = false;
                }
                

            }else if ((enemyCenterX > playerCenterX) && ((enemyCenterY <  (player.y + player.height)) && (enemyCenterY > player.y))){ //chasing left
                e.enemyCurrentImage = coffinLeftSide;
            }else if ( (enemyCenterX < playerCenterX) && ((enemyCenterY <  (player.y + player.height)) && (enemyCenterY > player.y)) ){ //chasing right
                e.enemyCurrentImage = coffinSide
            }else{
                if (enemyCenterY < playerCenterY) { // chasing down
                    e.enemyCurrentImage = coffinFront;
                } else { // chasing up
                    e.enemyCurrentImage = coffinBack;
                }
            }
            

            context.drawImage(e.enemyCurrentImage,
                e.frameX * e.width, e.frameY * e.height, e.width, e.height,
                e.x, e.y, e.width, e.height
            );
            context.fillStyle = "green";
            if (e.health <= 50){
                context.fillStyle = "red";
            }
            context.fillRect(e.x + e.width / 4, e.y + e.height + 1,  e.healthBarWidth * (e.health / 100), e.healthBarHeight);

        

            if (! e.attack){
                e.frameX = (e.frameX + 1) % 13;
                let eXChange = 0;
                let eYChange = 0;

                //enemy chasing
                if (enemyCenterX < playerCenterX){ //chasing right
                    obstacleRight(e, obstacles)
                    if (! e.obstacleRight){
                        eXChange = e.xChange;
                    }
                } else { //chasing left
                    obstacleLeft(e, obstacles)
                    if (!e.obstacleLeft){
                        eXChange = -1 * e.xChange;
                    }
                }

                if (enemyCenterY < playerCenterY) { // chasing down
                    obstacleBelow(e, obstacles)
                    if (!e.obstacleBelow){
                        eYChange = e.yChange;
                    }
                } else { // chasing up
                    obstacleAbove(e, obstacles)
                    if (!e.obstacleAbove){
                        eYChange = -1 * e.yChange;
                    }
                }

                e.x = e.x + eXChange
                e.y = e.y + eYChange
            }
        }
        if( e.type === 'cactus'){
            e.frameY = 1;
            e.randomizeMovement += 1;
            if (cactusAttack(player, e)) {
                e.attack = true;
            }
            if(e.attack){
                e.frameY = 2;
                if (! e.startedAttack){
                    e.frameX = 0;
                    e.startedAttack = true;
                }
                if (e.attackSpeed === 0){
                    e.frameX += 1;
                }
                e.attackSpeed = (e.attackSpeed + 1) % 5;
                if (e.frameX === 6){
                    if (! e.shotFired){
                        e.shotFired = true;
                        let bullet = {
                            x : 0,
                            y : 0,
                            width : 6,
                            height : 6,
                            xChange : 0,
                            yChange : 0,
                            enemy : true
                        }
                        if (e.cactusMoveLeft) {
                            bullet.x = e.x;
                            bullet.y = (e.y + (e.height / 2)) - (bullet.height / 2);
                            bullet.xChange = -3;
                        } else if (e.cactusMoveUp){
                            bullet.x = (e.x + (e.width / 2)) - (bullet.width / 2);
                            bullet.y = e.y;
                            bullet.yChange = -3;
                        } else if (e.cactusMoveRight){
                            bullet.x = e.x + e.width;
                            bullet.y = (e.y + (e.height / 2)) - (bullet.height / 2);
                            bullet.xChange = 3;
                        } else if (e.cactusMoveDown){
                            bullet.x = (e.x + (e.width / 2)) - (bullet.width / 2);
                            bullet.y = e.y + e.height;
                            bullet.yChange = 3;
                        }
                        enemyProjectiles.push(bullet);
                    }
                }

                if (e.frameX === 10){
                    e.attack = false;
                    e.startedAttack = false;
                    e.shotFired = false;
                }
            }else{ 
                if(e.randomizeMovement >= 60){
                    e.randomizeMovement = 0;
                    e.cactusMoveDown = false;
                    e.cactusMoveLeft = false;
                    e.cactusMoveRight = false;
                    e.cactusMoveUp = false;
                    let direction = randint (1,4)
                    if (direction === 1){
                        e.cactusMoveDown = true;
                        e.cactusImage = cactusFront;
                    }else if( direction === 2){
                        e.cactusMoveRight = true;
                        e.cactusImage = cactusSide;
                    }else if (direction === 3){
                        e.cactusMoveUp = true;
                        e.cactustImage = cactusBack;
                    }else{
                        e.cactusMoveLeft = true;
                        e.cactusImage = cactusLeftSide;
                    }
                }
                if (e.cactusMoveLeft){
                    e.cactusImage = cactusLeftSide;
                    obstacleLeft(e, obstacles);
                    if (e.x <= 0 || e.obstacleLeft){
                        let direction = randint (1,3)
                        if (direction === 1){
                            e.cactusMoveDown = true;
                            e.cactusImage = cactusFront;
                        }else if( direction === 2){
                            e.cactusMoveRight = true;
                            e.cactusImage = cactusSide;
                        }else {
                            e.cactusMoveUp = true;
                            e.cactustImage = cactusBack;
                        }
                        e.cactusMoveLeft = false;
                    }else{
                        e.x = e.x + (-1 * e.xChange);
                    }
                }
                if (e.cactusMoveRight){
                    e.cactusImage = cactusSide;
                    obstacleRight(e, obstacles)
                    if (((e.x + e.width) >= canvas.width) || e.rightObstacle){
                        let direction = randint (1,3)
                        if (direction === 1){
                            e.cactusMoveDown = true;
                            e.cactusImage = cactusFront;
                        }else if( direction === 2){
                            e.cactusMoveLeft = true;
                            e.cactusImage = cactusLeftSide;
                        }else {
                            e.cactusMoveUp = true;
                            e.cactusImage = cactusBack;
                        }
                        e.cactusMoveRight = false;
                    } else{
                    e.x += e.xChange;
                    }
                }
                if (e.cactusMoveUp){
                    e.cactusImage = cactusBack;
                    obstacleAbove(e, obstacles)
                    if (e.y  <= 0 || e.obstacleAbove){
                        let direction = randint (1,3)
                        if (direction === 1){
                            e.cactusMoveDown = true;
                            e.cactusImage = cactusFront;
                        }else if( direction === 2){
                            e.cactusMoveLeft = true;
                            e.cactusImage = cactusLeftSide;
                        }else {
                            e.cactusMoveRight = true;
                            e.cactusImage = cactusSide;
                        }
                        e.cactusMoveUp = false;
                    }else{
                        e.y = e.y + (-1 * e.yChange);
                    }
                }
                if (e.cactusMoveDown){
                    obstacleBelow(e, obstacles)
                    e.cactusImage = cactusFront;    
                    if (((e.y + e.height) >= canvas.height) || e.obstacleBelow){
                        let direction = randint (1,3)
                        if (direction === 1){
                            e.cactusMoveUp = true;
                            e.cactusImage = cactusBack;
                        }else if( direction === 2){
                            e.cactusMoveLeft = true;
                            e.cactusImage = cactusLeftSide;
                        }else {
                            e.cactusMoveRight = true;
                            e.cactusImage = cactusSide;
                        }
                        e.cactusMoveDown = false;
                    }else{
                        e.y += e.yChange;
                    }
                }

                
            }
            context.drawImage(e.cactusImage,
                e.frameX * e.width, e.frameY * e.height, e.width, e.height,
                e.x, e.y, e.width, e.height
            );
            context.fillStyle = "green";
            if (e.health <= 50){
                context.fillStyle = "red";
            }
            context.fillRect(e.x + e.width / 4, e.y + e.height + 1,  e.healthBarWidth * (e.health / 100), e.healthBarHeight);
            if(! e.attack){
                e.frameX = (e.frameX + 1) % 9;
            }
        }

        if (e.type === 'cayote'){
            e.frameY = 1
            if(!e.startedAttack){
                e.startedAttack = true;
                e.attackTimer = 0;
            }

            e.attackTimer += 1;
            if (e.attackTimer >= e.waitTime){
                e.attack = true;
            }
            if (e.attack){
                e.frameY = 2;
                if (e.attackSpeed === 0 && e.frameX){
                e.frameX += 1;
                }
                e.attackSpeed = (e.attackSpeed + 1) % 5; 

                if (e.frameX === 17){
                    if (!e.projectileShot){
                    e.projectileShot = true;
                    for(let i = 0; i < 2; i += 1 ){
                        let p = {
                                x : 0,
                                y : e.y + e.width,
                                width : 8,
                                height : 8,
                                xChange : randint(0.5, 2),
                                yChange : randint(0.5, 2),
                                chaseDown : false,
                                chaseUp : false,
                                chaseRight : false,
                                chaseLeft : false, 
                                timer : 0
                            }
                            if (i === 0){
                                p.x = e.x - p.width - 1 
                            }else{
                                p.x = e.x + e.width + p.width + 1
                            }
                            cayoteProjectiles.push(p)
                    }
                    }
                }
                
                if (e.frameX === 23){
                    e.attack = false;
                    e.startedAttack = false;
                    e.projectileShot = false
                }
            }
            

            context.drawImage(e.enemyCurrentImage,
                e.frameX * e.width, e.frameY * e.height, e.width, e.height,
                e.x, e.y, e.width, e.height
            );
            context.fillStyle = "green";
            if (e.health <= 50){
                context.fillStyle = "red";
            }
            context.fillRect(e.x , e.y + e.height -10,  e.healthBarWidth * (e.health / 100), e.healthBarHeight);

        

            if (! e.attack){
                e.frameX = (e.frameX + 1) % 13;
                let eXChange = 0;
                let eYChange = 0;

                //enemy chasing
                if (enemyCenterX < playerCenterX){ //running left
                    obstacleLeft(e, obstacles)
                    if (!e.obstacleLeft && e.x > 0){
                        eXChange =-1 * e.xChange;
                    }
                } else { //running right
                    obstacleRight(e, obstacles)
                    if (!e.obstacleRight && e.x + e.width < canvas.width){
                        eXChange =  e.xChange;
                    }
                }

                if (enemyCenterY < playerCenterY) { // running up
                    obstacleAbove(e, obstacles)
                    if (!e.obstacleAbove && e.y >0){
                        eYChange = -1 * e.yChange;
                    }
                } else { // running down
                    obstacleBelow(e, obstacles)
                    if (!e.obstacleBelow && e.y + e.height < canvas.height){
                        eYChange = e.yChange;
                    }
                }

                e.x = e.x + eXChange
                e.y = e.y + eYChange
            }
        }

        if (e.type === 'agis'){
            e.frameX = (e.frameX + 1) % 14;
            e.attackDelay += 1
            console.log(e.attack)
            if(e.damageDelay){
                e.damageDelayCount += 1
                if(e.damageDelayCount >= 10){
                    e.damageDelay = false;
                    e.damageDelayCount = 0;
                }
            }

            if(enemyCollides(e,player)){
                if (!e.damageDelay){
                    if(!player.invincible && !player.godmode){
                    player.health -= 1;
                    }
                    e.damageDelay = true;
                }
            }
            if (e.attackDelay >= 100){
                if(!e.setAttack){
                    e.currentAttack = randint(1,2);
                    e.attack = true;
                    e.setAttack = true
                }
            }
            if (e.attack){
                e.attackTimer += 1;
                if (e.attackTimer >= 120){
                    e.attack = false;
                    e.startedAttack = false;
                    e.setAttack = false;
                    e.attackTimer = 0;
                    e.chaseDown = false;
                    e.chaseRight = false;
                    e.attackDelay = 0
                }
                if(e.currentAttack === 1){
                    if (!e.startedAttack){
                        e.startedAttack = true;
                        e.moving = false;
                        if (e.x< player.x){ //chasing right
                                e.chaseRight = true;
                                e.xChange = 1
                        } else { //chasing left
                                e.chaseRight = false; 
                                e.xChange = -1 
                        }

                        if (e.y < player.y) { // chasing down
                                e.chaseDown = true;
                                e.yChange = 1
                        } else { // chasing up
                            e.chaseDown = false
                            e.yChange = -1
                        }

                    }
                    if(e.chaseRight){
                        e.xChange += 0.25
                    }else{
                        e.xChange -= 0.25
                    }

                    if(e.chaseDown){
                        e.yChange += 0.25
                    }else{
                        e.yChange -= 0.25
                    }

                    if(e.x <= 0 || e.x + e.width >= canvas.width){
                        e.xChange = -1 * e.xChange;
                    }
    
                    if(e.y <= 0 || e.y + e.height >= canvas.height){
                        e.yChange = -1 * e.yChange;
                    }

                    e.x += e.xChange;
                    e.y += e.yChange
            
                }else{
                    for(let i = 0; i < 10; i += 1){
                        let p = {
                            x : randint(e.x, e.x + e.width),
                            y : randint(e.y, e.y + e.height),
                            xChange : randint(-5, 5),
                            yChange : randint(-5, 5),
                            bounce : 0,
                            size : 5
                        }
                        e.attack = false;
                        e.startedAttack = false;
                        e.setAttack = false;
                        e.attackTimer = 0;
                        e.chaseDown = false;
                        e.chaseRight = false;
                        e.attackDelay = 0
                        agisProjectiles.push(p)
                    }
                }
            } else{
                if (!e.moving){
                    e.xChange = randint(-5,5);
                    e.yChange = randint(-5,5);
                    e.moving = true;
                }
                if(e.x <= 0 || e.x + e.width >= canvas.width){
                    e.xChange = -1 * e.xChange;
                }

                if(e.y <= 0 || e.y + e.height >= canvas.height){
                    e.yChange = -1 * e.yChange;
                }
                e.x += e.xChange
                e.y += e.yChange
            }
            context.drawImage(e.enemyCurrentImage,
                e.frameX * e.width, e.frameY * e.height, e.width, e.height,
                e.x, e.y, e.width, e.height
            );

            context.fillStyle = "black";
            context.fillRect( 16 , 17, e.healthBarWidth, e.healthBarHeight)
            context.fillStyle = "red";
            context.fillRect(16, 17,  e.healthBarWidth * (e.health / 5000), e.healthBarHeight)
            
        }
            
    }


    //handle key presses
    if (moveLeft) {
        obstacleLeft(player, obstacles)
        if (player.x > 0 && (!player.obstacleLeft)){
            if(player.superSpeed){
                player.x = player.x - (2 * player.xChange) - player.dodgeBoost; 
            }else{
            player.x = player.x - player.xChange - player.dodgeBoost;
            }
        }
    }
    if (moveUp) {
        obstacleAbove(player, obstacles)
        if (player.y > 0 && (!player.obstacleAbove)){
            if(player.superSpeed){
                player.y = player.y - (2 * player.yChange) - player.dodgeBoost;
            }else{
            player.y = player.y - player.yChange - player.dodgeBoost;
            }
        }
    }
    if (moveRight) {
        obstacleRight(player, obstacles)
        if ((player.x + player.width < canvas.width) && (!player.obstacleRight)){
            if(player.superSpeed){
                player.x = player.x +( 2 * player.xChange) + player.dodgeBoost; 
            }else{
            player.x = player.x + player.xChange+ player.dodgeBoost;
            }
        }    
    }
    if (moveDown) {
        obstacleBelow(player, obstacles)
        if (player.y + player.height < canvas.height && (!player.obstacleBelow)){
            if(player.superSpeed){
                player.y = player.y + (2* player.yChange) + player.dodgeBoost; 
            }else{
            player.y = player.y + player.yChange + player.dodgeBoost;
            }
        }
    }

    
}


function randint(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function obstacleLeft(character, obstacles){
    character.obstacleLeft = false;
    for (let o of obstacles){ // creating a small zone that accounts for a region next to a obstacle to your left 
        if (((character.x <= (o.x + o.size + 1)) && (character.x >= (o.x + o.size - 2))) && ((character.y <= (o.y + (o.size * 0.55) )) && ((character.y + character.height ) >= o.y + (o.size * 0.45)))){
            character.obstacleLeft = true;
            break
        }
    }
}

function obstacleRight(character, obstacles){
    character.obstacleRight = false;
     for (let o of obstacles){ 
         if (((character.x + character.width >= o.x ) && (character.x + character.width <= o.x + 1 )) && ((character.y <= (o.y + (o.size * 0.55))) && ((character.y + character.height) >= o.y + (o.size * 0.45)))){
             character.obstacleRight = true;
             break
         }
     }
}

function obstacleAbove(character, obstacles){
    character.obstacleAbove = false;
    for (let o of obstacles){ 
        if (((character.y <= (o.y + o.size - 1)) && (character.y >= (o.y + o.size - 2))) && ((character.x <= (o.x + o.size * 0.55)) && ((character.x + character.width * 0.45) >= o.x))){
            character.obstacleAbove = true;
            break
        }
    }
}

function obstacleBelow(character, obstacles){
    character.obstacleBelow = false;
    for (let o of obstacles){ 
        if (((character.y + character.height>= o.y - 1) && (character.y + character.height <= o.y + 1 )) && ((character.x <= (o.x + o.size)) && ((character.x + character.height) >= o.x))){
            character.obstacleBelow = true;
            break
        }
    }
}

function activate(event) {
    let key = event.key;
    if (event.key === "ArrowUp" ||
        event.key === "ArrowLeft" ||
        event.key === "ArrowDown" ||
        event.key === "ArrowRight") {
            event.preventDefault();
        }
    if (key === "ArrowLeft") {
        moveLeft = true;
    } else if (key === "ArrowUp"){
        moveUp = true;
    } else if (key === "ArrowRight"){
        moveRight = true;
    } else if (key === "ArrowDown"){
        moveDown = true;
    }
}


function deactivate(event) {
    let key = event.key;

    if (key === "ArrowLeft") {
        moveLeft = false;
    } else if (key === "ArrowUp"){
        moveUp = false;
    } else if (key === "ArrowRight"){
        moveRight = false;
    } else if (key === "ArrowDown"){
        moveDown = false;
    }
}

function shoot(event){
    let key = event.key;
    key = key.toUpperCase(); // upper case method found here: https://www.w3schools.com/jsref/jsref_touppercase.asp
    if (key === "A" ||
        key === "D" ||
        key === "W" ||
        key === "S") {
            event.preventDefault();
            gunShot = true;
        }
    if (gunShot){
        if (!shot){ // making sure i can only shoot once at a time as the boolean is updated within and disabled later when the key is lifted
            if (key === "A") {
                shootLeft = true;
            } else if (key === "W"){
                shootUp = true;
            } else if (key === "D"){
                shootRight = true;
            } else if (key === "S"){
                shootDown = true;
            }
            player.frameX = 0;

            if (player.ammo > 0){
                if (!player.unlimitedBullets && !player.freeFire){
                    player.ammo -= 1;
                }
                // playerAmmoElement.innerHTML = "Ammo: " + player.ammo + "/6";
                shot = true;
                shotAnimation = true;
                let bullet = {
                    x : 0,
                    y : 0,
                    width : 6,
                    height : 6,
                    xChange : 0,
                    yChange : 0,
                    enemy : false,
                }
                if (key === "A") {
                    bullet.x = player.x;
                    bullet.y = (player.y + (player.height / 2)) - (bullet.height / 2);
                    bullet.xChange = -10;
                } else if (key === "W"){
                    bullet.x = (player.x + (player.width / 2)) - (bullet.width / 2);
                    bullet.y = player.y;
                    bullet.yChange = -10;
                } else if (key === "D"){
                    bullet.x = player.x + player.width;
                    bullet.y = (player.y + (player.height / 2)) - (bullet.height / 2);
                    bullet.xChange = 10;
                } else if (key === "S"){
                    bullet.x = (player.x + (player.width / 2)) - (bullet.width / 2);
                    bullet.y = player.y + player.height;
                    bullet.yChange = 10;
                }
                bullets.push(bullet);
                let bulletAudio = new Audio()
                bulletAudio = bulletSound
                bulletAudio.play()
            }
        }
    }
}

function deshoot(event){
    let key = event.key;
    key = key.toUpperCase(); // upper case method found here: https://www.w3schools.com/jsref/jsref_touppercase.asp
    if (key === "A" ||
        key === "D" ||
        key === "W" ||
        key === "S") {
            event.preventDefault();
            gunShot = false;
            shootDown = false;
            shootLeft = false;
            shootRight = false;
            shootUp = false;
        }

}

function reload(event) {
    let key = event.key;
    key = key.toUpperCase();

    if (key === "R" && !playerReload){
        playerReload = true;
        player.ammo = 0;
        reloadDelay = Date.now() + 1000; //1 second from now
    }

    if (player.ammo === 0 && !playerReload){
        playerReload = true;
        reloadDelay = Date.now() + 1000; 
    }
}

function dodge(event){
    let key = event.key
    if(key === ' ' && !player.dodge){
        event.preventDefault()
        player.dodge = true;
        player.dodgeCooldown = 0;
    }
}

function enemyCollides(player, e) {
    if (player.x + player.width < e.x ||
        e.x + e.width < player.x ||
        player.y > e.y + e.height ||
        e.y > player.y + player.height) {
        return false;
    } else {
        return true;
    }
}

function enemyCollidesCenterPLayer(player, e) {
    if (player.x + (player.width / 2 ) < e.x ||
        e.x + (e.width / 2) < player.x ||
        player.y > e.y + (e.height / 2 )||
        e.y > player.y + (player.height / 2 )) {
        return false;
    } else {
        return true;
    }
}

function enemyAttackPLayer(player, e) {
    if (player.x + player.width  < e.x - 20 ||
        e.x + e.width < player.x - 20||
        player.y - 20 > e.y + e.height ||
        e.y - 20 > player.y + player.height) {
        return false;
    } else {
        return true;
    }
}

 function cactusAttack(player, c){
    if ((c.cactusMoveRight && (c.x < player.x &&(((c.y + c.width) > player.y) && (c.y < (player.y + player.height)))))||
    (c.cactusMoveLeft && (c.x > player.x &&(((c.y + c.width) > player.y) && (c.y < (player.y + player.height))))) ||
    (c.cactusMoveUp && (c.y > player.y && ((c.x < (player.x + player.width))) && ((c.x + c.width) > player.x)))||
    (c.cactusMoveDown && (c.y < player.y && ((c.x < (player.x + player.width))) && ((c.x + c.width) > player.x)))) 
    {
    return true;
    }else{
        return false;
    }
}

function load_assets(assets, callback) {
    let num_assets = assets.length;
    let loaded = function() {
        console.log("loaded");
        num_assets = num_assets -1
        if (num_assets === 0) {
            callback();
        }
    };
    for (let asset of assets) {
        let element = asset.var;
        if (element instanceof HTMLImageElement) {
            console.log("img");
            element.addEventListener("load", loaded, false);
        }
        else if ( element instanceof HTMLAudioElement) {
            console.log("audio");
            element.addEventListener("canplaythrough", loaded, false);
        }
        element.src = asset.url
    }
}


function stop(outcome_txt){
    window.removeEventListener("keydown", activate, false);
    window.removeEventListener("keyup", deactivate, false);
    window.removeEventListener("keydown", shoot, false);
    window.removeEventListener("keyup", deshoot, false);
    window.removeEventListener("keydown", reload, false);
    window.removeEventListener("keydown", dodge, false);
    window.cancelAnimationFrame(request_id);
    currentTrack.pause()
    let outcome_element = document.querySelector('#outcome')
    outcome_element.innerHTML = outcome_txt 

    let data = new FormData();
    data.append("score", player.score);

    xhttp = new XMLHttpRequest();
    xhttp.addEventListener("readystatechange",
        handle_response, false);
    xhttp.open("POST", "/store_score", true);
    xhttp.send(data)
    
}

function handle_response(){
    if (xhttp.readyState === 4) {
        if (xhttp.status === 200){
            if (xhttp.responseText === "success") {
                console.log("Yes");
            }else{
                console.log("No");
            }
        }
    }
}

function levelInit(currentLevel, droppedItems){
    let enemyCount = 0;
    let enemyType = 0;
    if (currentLevel === 1){
        enemyCount = randint(5,8);
    } else if(currentLevel === 2){
        enemyCount = 10;
    } else if(currentLevel === 3){
        enemyCount = randint(12, 18);
    } else if(currentLevel === 4){
        enemyCount = 1;
        currentTrack.pause() // top answer : https://stackoverflow.com/questions/14834520/html5-audio-stop-function
        currentTrack = bossMusic;
        currentTrack.play()
        let newItem1 = {
            x : 48,
            y: 48,
            width : 16,
            height : 16,
            itemNum : 3
        }
        let newItem2 = {
            x : 48 ,
            y: canvas.height - 120,
            width : 16,
            height : 16,
            itemNum : 1
        }
        let newItem3 = {
            x : canvas.width - 48,  
            y: canvas.height - 120,
            width : 16,
            height : 16,
            itemNum : 1
        }
        let newItem4 = {
            x : canvas.width - 48,
            y: 48,
            width : 16,
            height : 16,
            itemNum : 1
        }
        droppedItems.push(newItem1);
        droppedItems.push(newItem2);
        droppedItems.push(newItem3);
        droppedItems.push(newItem4);
    } else{
        enemyCount = randint(5, 10)
    }
    let i = 0;
    while (i < enemyCount){
        if((currentLevel === 2 || currentLevel === 3)){
            enemyType = randint(0,2); 
        }else if (currentLevel === 1){
        enemyType = randint(0,1);
        }else if( currentLevel === 4){
            enemyType = 3;
        }else{
            enemyType = randint(0,2)
        }
        if (enemyType === 0){
            let coffin = {
                x : randint(0, canvas.width - 74),
                y : randint(0, canvas.height - 70),
                height : 70,
                width : 74,
                xChange : 1,
                yChange: 1,
                health: 100,
                type : 'coffin',
                frameX : 0,
                frameY : 0,
                attack : false,
                startedAttack: false,
                attackSpeed: 0,
                chaseLeft : false,
                chaseRight : false,
                chaseUp : false,
                chaseDown : false,
                enemyCurrentImage : coffinFront,
                obstacleLeft : false,
                obstacleRight : false,
                obstacleAbove : false,
                obstacleBelow : false,
                healthBarWidth : 24,
                healthBarHeight : 4,
                item : randint(0,8),
                score : 10
            }
            enemies.push(coffin);
        }else if (enemyType === 1){
            let cactus = {
                x : randint(0, canvas.width - 40),
                y : randint(0, canvas.height - 40),
                height : 40,
                width : 40,
                xChange : 2,
                yChange: 2,
                health: 100,
                type : 'cactus',
                frameX : 0,
                frameY : 0,
                attack : false,
                startedAttack : false,
                attackSpeed: 0,
                cactusMoveUp : false,
                cactusMoveDown : false,
                cactusMoveLeft : false,
                cactusMoveRight : false,
                shotFired : false,
                cactusImage : cactusFront,
                leftObstacle : false,
                rightObstacle : false,
                aboveObstacle : false,
                belowObstacle : false,
                randomizeMovement : 0,   
                healthBarWidth : 24,
                healthBarHeight : 4,
                item : randint(0,8),
                score : 20
            };
            let direction = randint (1,4)
            if (direction === 1){
                cactus.cactusMoveLeft = true;
                cactus.cactusImage = cactusLeftSide;
            }else if( direction === 2){
                cactus.cactusMoveRight = true;
                cactus.cactusImage = cactusSide;
            }else if (direction === 3){
                cactus.cactusMoveUp = true;
                cactus.cactusImage = cactusBack;
            }else{
                cactus.cactusMoveDown = true;
            }

            enemies.push(cactus)
        } else if (enemyType === 2){
            let cayote = {
                x : randint(0, canvas.width - 74),
                y : randint(0, canvas.height - 70),
                height : 70,
                width : 70,
                xChange : 1,
                yChange: 1,
                health: 200,
                type : 'cayote',
                frameX : 0,
                frameY : 0,
                attack : false,
                startedAttack: false,
                attackTimer : 11,
                waitTime : randint(100, 300),
                attackSpeed: 0,
                projectileShot : false,
                enemyCurrentImage : cayoteFront,
                obstacleLeft : false,
                obstacleRight : false,
                obstacleAbove : false,
                obstacleBelow : false,
                healthBarWidth : 24,
                healthBarHeight : 4,
                item : randint(0,8),
                score : 50
            }
            enemies.push(cayote)
        }else if(enemyType === 3 ){
            let agis = {
                x : 160,
                y : 3,
                height : 240,
                width : 224,
                xChange : randint(-5,5),
                yChange: randint(-5,5),
                health: 5000,
                type : 'agis',
                frameX : 0,
                frameY : 0,
                attackDelay : 0,
                attack : false,
                attackStarted : false,
                setAttack : false,
                chaseRight : false,
                chaseDown : false,
                currentAttack : 1,
                attackTimer : 0,
                moving : true,
                enemyCurrentImage : agisImage,
                healthBarWidth : canvas.width - 32,
                healthBarHeight : 8,
                item : randint(0,8),
                damageDelay : false,
                damageDelayCount : 0,
                score : 1000
            }
            enemies.push(agis)
        }
        i += 1
    }
}

function tileInit(background, obstacles, droppedItems){
    obstacles.length = 0; // clearing an array taken from chatgpt
    droppedItems.length = 0;
    for (let r = 0; r < 32; r+=1) {
        for (let c = 0; c < 50; c+=1) {
            let tile = background[r][c];
            if (tile != 1808 && tile != 1856 && tile != 1857 && tile != 1819 && tile != -1 && tile != 635) {
                let t = {
                    background : background[r][c],
                    x : c * tileSize,
                    y : r * tileSize,
                    size : 16
                } 
                obstacles.push(t)
            }
        }
    }
}

function enterBoss(currentLevel, background, obstacles, droppedItems){
    tileInit(background, obstacles, droppedItems)
    levelInit(currentLevel, droppedItems);
    player.x = canvas.width / 2 - player.width / 2;
    player.y = canvas.height - player.height;
}

function cheats(event){
    let key = event.key
    key = key.toUpperCase();

    if (key === 'G'){
        if (!player.godmode){
            player.godmode = true;
        }else{
            player.godmode = false
        }
    }

    if (key === 'U'){
        if (!player.freeFire){
            player.freeFire = true;
        }else{
            player.freeFire = false
        }
    }
}
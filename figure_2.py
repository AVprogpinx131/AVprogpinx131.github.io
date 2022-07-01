import matplotlib.pyplot as plt 

# ['Solarize_Light2', '_classic_test_patch', '_mpl-gallery', '_mpl-gallery-nogrid', 'bmh', 'classic', 
# 'dark_background', 'fast', 'fivethirtyeight', 'ggplot', 'grayscale', 'seaborn', 'seaborn-bright', 
# 'seaborn-colorblind', 'seaborn-dark', 'seaborn-dark-palette', 'seaborn-darkgrid', 'seaborn-deep', 
# 'seaborn-muted', 'seaborn-notebook', 'seaborn-paper', 'seaborn-pastel', 'seaborn-poster', 'seaborn-talk', 'seaborn-ticks', 
# 'seaborn-white', 'seaborn-whitegrid', 'tableau-colorblind10']

plt.style.use('dark_background')

guesses_x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
points_y_1 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
points_y_2 = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6]
points_y_3 = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11]
points_y_4 = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16]
points_y_5 = [30, 29, 28, 27, 26, 25, 24, 23, 22, 21]
points_y_6 = [35, 34, 33, 32, 31, 30, 29, 28, 27, 26]
points_y_7 = [40, 39, 38, 37, 36, 35, 34, 33, 32, 31]
points_y_8 = [50, 49, 48, 47, 46, 45, 44, 43, 42, 41]

plt.figure(facecolor='#00755E') 

fig = plt.gcf()
fig.canvas.set_window_title('Mängu joonis histogrammi kujul')

plt.bar(guesses_x, points_y_1, label="Tase 1")
plt.bar(guesses_x, points_y_2, bottom=points_y_1, label="Tase 2")
plt.bar(guesses_x, points_y_3, bottom=points_y_2, label="Tase 3")
plt.bar(guesses_x, points_y_4, bottom=points_y_3, label="Tase 4")
plt.bar(guesses_x, points_y_5, bottom=points_y_4, label="Tase 5")
plt.bar(guesses_x, points_y_6, bottom=points_y_5, label="Tase 6")
plt.bar(guesses_x, points_y_7, bottom=points_y_6, label="Tase 7")
plt.bar(guesses_x, points_y_8, bottom=points_y_7, label="Tase 8")

plt.xlabel("Pakkumised", fontweight='bold')
plt.ylabel("Tasemete punktid", fontweight='bold')
plt.title("Numbri arvamise punktisüsteem", fontweight='bold', fontsize=20)

plt.savefig('histogram.png')
plt.legend()
plt.show()
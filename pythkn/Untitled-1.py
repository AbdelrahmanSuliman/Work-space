f = open("SoulsBorneBaldDoffy.txt","a")
open('SoulsBorneBaldDoffy.txt', 'w').close()
f = open("SoulsBorneBaldDoffy.txt","a")

Stats = {"Favgame":" ","Favboss":" ","FavBuild":" " ,"NumberPlayed":" ","HoursPlayed" :" "}
#FavGame = " "
#print("your options are: Bloodborne, DarkSouls 1, DarkSouls 2, DarkSouls 3, Elden ring, Sekiro")
#while FavGame != "Bloodborne" or "DarkSouls 3" or "DarkSouls 1" or "DarkSouls 2" or "Sekiro" or "Elden ring":
FavGame = input("Favorite Game:")
FavBoss = input("Favorite boss:")
FavBuild = input("Favorite Build:")
NumberPlayed = int(input("Number of FromSoftroll games played:"))
HoursPlayed = int(input(f"How long did it take you to beat {FavGame}:"))

Average = 0
if FavGame == "Elden ring":
    if HoursPlayed > 45:
        Average = f"It took you longer than average to beat {FavGame}"
    if HoursPlayed == 45:
        Average = f"It took you the average amount of time to beat {FavGame}"
    if HoursPlayed < 45:
        Average = f"It took you less than the average amount of time to beat {FavGame}"
if FavGame == "Bloodborne" or "DarkSouls 3":
    if HoursPlayed > 35:
        Average = f"It took you longer than average to beat {FavGame}"
    if HoursPlayed == 35:
        Average = f"It took you the average amount of time to beat {FavGame}"
    if HoursPlayed < 35:
        Average = f"It took you less than the average amount of time to beat {FavGame}"
if FavGame == "Sekiro" or "DarkSouls 1" or "DarkSouls 2":
    if HoursPlayed > 40:
        Average = f"It took you longer than average to beat {FavGame}"
    if HoursPlayed == 40:
        Average = f"It took you the average amount of time to beat {FavGame}"
    if HoursPlayed < 40:
        Average = f"It took you less than the average amount of time to beat {FavGame}"

Stats.update({"Favgame": FavGame,"Favboss": FavBoss,"FavBuild": FavBuild,"NumberPlayed": NumberPlayed,"HoursPlayed": HoursPlayed})

f = open("SoulsBorneBaldDoffy.txt","a")
for key,value in Stats.items():
    f.write('%s:%s\n' % (key, value))
f.write(Average)




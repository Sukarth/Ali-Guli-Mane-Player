# Ali Guli Mane

An online multiplayer version of the traditional South Indian board game Ali Guli Mane.



## How to play the game?

The online game can be played by visiting this url:

  https://alu-guli-mane-player.onrender.com/

2 players must join to start playing a game. The players take turns choosing a slot on their side of the board until the game ends. 


## Additional Information

The code of this game is split into 2 parts:
  1. The game's server
  2. The game's client

### The game's server

The server code for this game is located in another repository. The code is also hosted on a different url to the client code.

  The url for the repository to view the server code for this game: [Ali Guli Mane Server](https://github.com/Sukarth/Alu-Guli-Mane-Server/)

### The game's client

  The client code for this game is stored in this repository. It is hosted at this url: [Ali Guli Mane Client](https://alu-guli-mane-player.onrender.com/).

## Troubleshooting

Both the server and the client codes are hosted on a platfrom called [Render](https://render.com/). The client is always running on the hosted url because it is a static site. However, the server runs as a web service, and according to Render's free plan 'will spin down with inactivity, which can delay requests by 50 seconds or more'. This can cause problems with the client sometimes, and cause it to stop working, since the server might not respond to any requests for 50 seconds or more. However, this problem should only occur if requests were not sent to the server in a long time, and it was 'spinned down'. This can happen for example if it has been a long time since anybody opened and played the game/client. A soulution to this problem is to wait around a minute until the client finished loading (it will only finish loading once the server is up) and responds by showing a popup asking for your name. If that doesn't work, then reloading the page is also an option, as it could fix any network problems.

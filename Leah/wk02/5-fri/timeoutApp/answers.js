let q1Answers = [
    "John Lennon","Paul McCartney","Ringo Starr","George Harrison","Pete Best"
]
let q2Answers = [
    "12 Bar Original","A Beginning","A Day In The Life","A Hard Day's Night","A Shot Of Rhythm And Blues","A Taste Of Honey","Across The Universe","Act Naturally","Ain't She Sweet","All I've Got To Do","All My Loving","All Things Must Pass","All Together Now","All You Need Is Love","And I Love Her","And Your Bird Can Sing","Anna (Go To Him)","Another Girl","Any Time At All","Ask Me Why","Baby It's You","Baby You're A Rich Man","Baby's In Black","Back In The USSR","Bad Boy","Ballad Of John And Yoko, The","Beautiful Dreamer","Because","Being For The Benefit Of Mr Kite!","Besame Mucho","Birthday","Blackbird","Blue Jay Way","Boys","Can't Buy Me Love","Carnival Of Light","Carol","Carry That Weight","Cayenne","Chains","Child Of Nature","Christmas Time (Is Here Again)","Circles","Clarabella","Come And Get It","Come Together","Continuing Story Of Bungalow Bill, The","Cry Baby Cry","Cry For A Shadow","Crying, Waiting, Hoping","Day Tripper","Dear Prudence","Devil In Her Heart","Dig A Pony","Dig It","Dizzy Miss Lizzy","Do You Want To Know A Secret","Doctor Robert","Don't Bother Me","Don't Ever Change","Don't Let Me Down","Don't Pass Me By","Drive My Car","Eight Days A Week","Eleanor Rigby","End, The","Etcetera","Every Little Thing","Everybody's Got Something To Hide Except Me And My Monkey","Everybody's Trying To Be My Baby","Fixing A Hole","Flying","Fool On The Hill, The","For No One","For You Blue","Free As A Bird","From Me To You","Get Back","Getting Better","Girl","Glad All Over","Glass Onion","Golden Slumbers","Good Day Sunshine","Good Morning Good Morning","Good Night","Got To Get You Into My Life","Hallelujah, I Love Her So","Happiness Is A Warm Gun","Hello Little Girl","Hello, Goodbye","Help!","Helter Skelter","Her Majesty","Here Comes The Sun","Here, There And Everywhere","Hey Bulldog","Hey Jude","Hippy Hippy Shake, The","Hold Me Tight","Honey Don't","Honey Pie","Honeymoon Song, The","How Do You Do It","I Am The Walrus","I Call Your Name","I Don't Want To Spoil The Party","I Feel Fine","I Forgot To Remember To Forget","I Got A Woman","I Got To Find My Baby","I Just Don't Understand","I Me Mine","I Need You","I Saw Her Standing There","I Should Have Known Better","I Wanna Be Your Man","I Want To Hold Your Hand","I Want To Tell You","I Want You (She's So Heavy)","I Will","I'll Be Back","I'll Be On My Way","I'll Cry Instead","I'll Follow The Sun","I'll Get You","I'm A Loser","I'm Down","I'm Gonna Sit Right Down And Cry (Over You)","I'm Happy Just To Dance With You","I'm Looking Through You","I'm Only Sleeping","I'm So Tired","I'm Talking About You","I've Got A Feeling","I've Just Seen A Face","If I Fell","If I Needed Someone","If You've Got Trouble","In My Life","In Spite Of All The Danger","Inner Light, The","It Won't Be Long","It's All Too Much","It's Only Love","Johnny B Goode","Julia","Junk","Kansas City/Hey-Hey-Hey-Hey!","Keep Your Hands Off My Baby","Komm, Gib Mir Deine Hand","Lady Madonna","Leave My Kitten Alone","Lend Me Your Comb","Let It Be","Like Dreamers Do","Little Child","Lonesome Tears In My Eyes","Long And Winding Road, The","Long Tall Sally","Long, Long, Long","Los Paranoias","Love Me Do","Love Of The Loved","Love You To","Lovely Rita","Lucille","Lucy In The Sky With Diamonds","Maggie Mae","Magical Mystery Tour","Mailman, Bring Me No More Blues","March Of The Meanies","Martha My Dear","Matchbox","Maxwell's Silver Hammer","Mean Mr Mustard","Memphis, Tennessee","Michelle","Misery","Money (That's What I Want)","Moonlight Bay","Mother Nature's Son","Mr Moonlight","My Bonnie","Night Before, The","No Reply","Nobody's Child","Norwegian Wood (This Bird Has Flown)","Not A Second Time","Not Guilty","Nothin' Shakin'","Now And Then","Nowhere Man","Ob-La-Di, Ob-La-Da","Octopus's Garden","Oh! Darling","Old Brown Shoe","One After 909","Only A Northern Song","Ooh! My Soul","Paperback Writer","Penny Lane","Pepperland","Pepperland Laid Waste","Piggies","Please Mister Postman","Please Please Me","Polythene Pam","PS I Love You","Rain","Real Love","Revolution","Revolution 1","Revolution 9","Rip It Up/Shake, Rattle And Roll/Blue Suede Shoes","Rock And Roll Music","Rocky Raccoon","Roll Over Beethoven","Run For Your Life","Saints, The","Savoy Truffle","Sea Of Holes","Sea Of Monsters","Sea Of Time","Searchin'","September In The Rain","Sexy Sadie","Sgt Pepper's Lonely Hearts Club Band","Sgt Pepper's Lonely Hearts Club Band (Reprise)","She Came In Through The Bathroom Window","She Loves You","She Said She Said","Sheik Of Araby, The","She's A Woman","She's Leaving Home","Shout","Sie Liebt Dich","Slow Down","So How Come (No One Loves Me)","Soldier Of Love","Some Other Guy","Something","Sour Milk Sea","Step Inside Love","Strawberry Fields Forever","Sun King","Sure To Fall (In Love With You)","Swanee River","Sweet Little Sixteen","Sweet Georgia Brown","Take Good Care Of My Baby","Take Out Some Insurance On Me, Baby","Taxman","Teddy Boy","Tell Me What You See","Tell Me Why","Thank You Girl","That Means A Lot","That'll Be The Day","That's All Right (Mama)","The Ballad Of John And Yoko","The Continuing Story Of Bungalow Bill","The End","The Fool On The Hill","The Hippy Hippy Shake","The Honeymoon Song","The Inner Light","The Long And Winding Road","The Night Before","The Saints","The Sheik Of Araby","The Word","There's A Place","Things We Said Today","Think For Yourself","This Boy","Three Cool Cats","Ticket To Ride","Till There Was You","To Know Her Is To Love Her","Tomorrow Never Knows","Too Much Monkey Business","Twist And Shout","Two Of Us","Wait","We Can Work It Out","What Goes On","What You're Doing","What's The New Mary Jane","When I Get Home","When I'm Sixty-Four","While My Guitar Gently Weeps","Why","Why Don't We Do It In The Road?","Wild Honey Pie","With A Little Help From My Friends","Within You Without You","Word, The","Words Of Love","Yellow Submarine","Yellow Submarine In Pepperland","Yer Blues","Yes It Is","Yesterday","You Can't Do That","You Know My Name (Look Up The Number)","You Know What To Do","You Like Me Too Much","You Never Give Me Your Money","You Really Got A Hold On Me","You Won't See Me","You'll Be Mine","You're Going To Lose That Girl","You've Got To Hide Your Love Away","Young Blood","Your Mother Should Know"
]

for(var i=0; i < q1Answers.length; i++) {
    q1Answers[i] = q1Answers[i].replace(/[^\w \s]/g, '').toLowerCase();
};

for(var i=0; i < q2Answers.length; i++) {
    q2Answers[i] = q2Answers[i].replace(/[^\w \s]/g, '').toLowerCase();
};
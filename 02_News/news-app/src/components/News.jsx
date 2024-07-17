import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  article = [
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ET Bureau",
      title: "Sony buys India TV rights for MLC",
      description:
        "Culver Max Entertainment, operating Sony Sports Network, acquired India TV rights for Major League Cricket 2024. JioCinema retains streaming rights. The second edition starts with reigning champions MI New York vs. Seattle Orcas. The final is in Texas on July…",
      url: "https://economictimes.indiatimes.com/industry/media/entertainment/media/sony-buys-india-tv-rights-for-mlc/articleshow/111522142.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-111522157,width-1200,height-630,imgsize-6594,overlay-economictimes/photo.jpg",
      publishedAt: "2024-07-05T18:36:57Z",
      content:
        "Culver Max Entertainment, which owns and operates Sony Sports Network, has acquired the exclusive India television rights for the 2024 season of the American T20 competition, Major League Cricket (ML… [+598 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Data Skrive",
      title: "How to watch live cricket streaming - Saturday, July 6",
      description:
        "To find out how to watch or live stream the cricket action that’s happening on Saturday, July 6, see the article below, including World Championship of Legends Cricket play.FuboTV will stream…",
      url: "https://ftw.usatoday.com/article/how-to-watch-live-cricket-streaming-saturday-july-6",
      urlToImage:
        "https://ftw.usatoday.com/wp-content/uploads/sites/90/2024/07/19254055-2.jpg?w=1024&h=576&crop=1",
      publishedAt: "2024-07-05T18:23:00Z",
      content:
        "To find out how to watch or live stream the cricket action that’s happening on Saturday, July 6, see the article below, including World Championship of Legends Cricket play.\r\nFuboTV will stream over … [+1098 chars]",
    },
    {
      source: {
        id: null,
        name: "Bloguismo.com",
      },
      author: "Anairas",
      title: "Ideas on how to Bet To your Tote 2021 I Tote Gambling Said",
      description:
        "Blogs Independence Of them Bets So what does A good +7 Spread Mean? Time to Put your Bet One another Organizations So you can Score + Earn What does Sp Mean Within the Pony Racing Betting? Our very own Publication Shows you It all Aside from the opportunity l…",
      url: "https://www.bloguismo.com/ideas-on-how-to-bet-to-your-tote-2021-i-tote-gambling-said/",
      urlToImage: "https://g.twimg.com/Twitter_logo_blue.png",
      publishedAt: "2024-07-05T16:11:42Z",
      content:
        "Aside from the opportunity lay by the sports books, the shape credit also contains plenty of information a punter are able to use to assist them to try for the best choice it tends to make. Over hour… [+5956 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TNN",
      title:
        "Teen injures finger on train while on his way for T20 winners' parade.",
      description:
        "India News: MUMBAI: An 18-year-old boy, on his way to Marine Drive for the parade to celebrate India's T20 cricket win, suffered injuries to his finger on a train.",
      url: "https://timesofindia.indiatimes.com/india/teen-injures-finger-on-train-while-on-his-way-for-t20-winners-parade-/articleshow/111520493.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111520626,width-1070,height-580,imgsize-82084,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-05T16:10:45Z",
      content: "Unforgettable train journeys across Indias best landscape",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "insider@insider.com (Brendan Griffiths)",
      title:
        "Euro 2024: Where to watch a free France vs. Portugal live stream from anywhere",
      description:
        "Mbappe and Ronaldo meet today in the Euros quarterfinals. Don't miss out on a free France vs. Portugal live stream.",
      url: "https://www.businessinsider.com/guides/streaming/euro-2024-where-to-watch-france-vs-portugal-live-stream-free",
      urlToImage:
        "https://i.insider.com/668811b51f0c1cd6d731d525?width=1200&format=jpeg",
      publishedAt: "2024-07-05T16:00:02Z",
      content:
        "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nTwo former Euro championship teams meet today in the quarter-finals, and two giants of the game are taki… [+7769 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        "After Team India Parade, Civic Body Collects Tonnes Of Garbage, Footwear",
      description:
        "After lakhs of cricket fans gave a rousing welcome to their beloved World Cup-winning Team India, thousands who trudged back home late on Thursday night had to return barefoot.",
      url: "https://www.ndtv.com/india-news/after-team-india-parade-mumbai-civic-body-bmc-collects-tonnes-of-garbage-footwear-6042424",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/pu5loirg_marine-drive-_625x300_05_July_24.jpeg?ver-20240615.100",
      publishedAt: "2024-07-05T15:46:09Z",
      content:
        "A neat Marine Drive greeted the usual crowds of morning walkers.\r\nMumbai: After lakhs of cricket fans gave a rousing welcome to their beloved World Cup-winning Team India, thousands who trudged back … [+2766 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "Asked doctors to treat Pant abroad if required after his car crash: PM Modi",
      description:
        "Prime Minister Narendra Modi had called up Rishabh Pant's mother when the star wicketkeeper-batter was recuperating from his injuries after a car crash and had told doctors to treat him abroad if required.\nDuring an interaction with the T20 World Cup-winning …",
      url: "https://www.business-standard.com/cricket/news/asked-doctors-to-treat-pant-abroad-if-required-after-his-car-crash-pm-modi-124070501104_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/04/thumb/fitandfill/400X400/1720089522-1134.jpg",
      publishedAt: "2024-07-05T15:35:57Z",
      content:
        '"When I spoke to you, you said it (the accident) was your fault. That is a big thing, you did not give an excuse, like there was a ditch etc. It was your openness. I take note of small things in life… [+459 chars]',
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Amit Kumar",
      title: "USA wants to excel in cricket: MLC Freedom's owner Govil",
      description:
        "Sanjay Govil, who is the founder and chairman of Infinite Computer Solutions and owner of MLC franchise Washington Freedom, spoke to TimesofIndia.com in an exclusive interview about his side, captain Steve Smith, pace sensation Saurabh Netravalkar and cricket…",
      url: "https://timesofindia.indiatimes.com/sports/cricket/major-league-cricket/usa-wants-to-excel-in-every-sport-it-plays-including-cricket-mlc-team-washington-freedoms-owner-sanjay-govil/articleshow/111519839.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111519916,width-1070,height-580,imgsize-26428,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-05T15:27:32Z",
      content:
        "T20 World Cup: Top 5 bowlers with the lowest economy min 20 overs",
    },
    {
      source: {
        id: null,
        name: "Khabarhub.com",
      },
      author: "Khabarhub",
      title: "CAN decides to place Sandeep in Grade ‘A’",
      description:
        "KATHMANDU: The Cricket Association of Nepal (CAN) has signed Sandeep Lamichhane under a central contract. In a meeting of its central committee, CAN decided to place Sandeep in the Grade ‘A’ category of the central contract from July 1 to December 31, 2024. P…",
      url: "https://english.khabarhub.com/2024/05/364088/",
      urlToImage:
        "https://english.khabarhub.com/wp-content/uploads/2024/05/Sandeep.jpg",
      publishedAt: "2024-07-05T15:15:40Z",
      content:
        "KATHMANDU: The Cricket Association of Nepal (CAN) has signed Sandeep Lamichhane under a central contract.\r\nIn a meeting of its central committee, CAN decided to place Sandeep in the Grade ‘A’ categor… [+806 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "Shukla hits back at Thackeray, says cannot prioritise one city over another",
      description:
        "The BCCI cannot prioritise one city over another when it comes to organising important finals, said board's vice-president on Friday in response to Shiv Sena leader Aaditya Thackeray's demand.\nFollowing a massive turnout during Indian cricket team's T20 World…",
      url: "https://www.business-standard.com/cricket/news/shukla-hits-back-at-thackeray-says-cannot-prioritise-one-city-over-another-124070500987_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/01/thumb/featurecrop/400X400/1714554765-6429.jpg",
      publishedAt: "2024-07-05T14:53:58Z",
      content:
        '"Yesterday\'s celebration in Mumbai is also a strong message to the BCCI... Never take away a World Cup final from Mumbai!, Thackeray had written on X\r\n"This is purely a decision keeping in mind the e… [+2626 chars]',
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        '"Comparisons Between Virat And Babar Don\'t Make Sense": Ex Pak Cricketer',
      description:
        "Former Pakistan cricketer Ahmed Shehzad had words of huge praise for Virat Kohli, alongside another strong take regarding Babar Azam.",
      url: "https://sports.ndtv.com/t20-world-cup-2024/comparisons-between-virat-kohli-and-babar-azam-dont-make-sense-ex-pakistan-cricketer-6015540",
      urlToImage:
        "https://c.ndtvimg.com/2022-08/aeh03hm8_virat-kohli-babar-azam-afp_625x300_25_August_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
      publishedAt: "2024-07-05T14:52:59Z",
      content:
        "Former Pakistan cricketer Ahmed Shehzad has gone viral numerous times over the course of the 2024 T20 World Cup with his fiery, no-nonsense opinions, and he has capped off the tournament with yet ano… [+1617 chars]",
    },
    {
      source: {
        id: null,
        name: "Time Out",
      },
      author: "Primary Author: Liv Kelly",
      title: "Where to watch the 2024 Olympics in London: 8 best screenings",
      description:
        "Ahead of the Olympic Games kicking off in Paris on July 26, here’s a roundup of  of the best places to catch the greatest show on earth in London.",
      url: "https://www.timeout.com/london/news/where-to-watch-the-2024-olympics-in-london-8-best-screenings-070524",
      urlToImage: "https://media.timeout.com/images/106154590/image.jpg",
      publishedAt: "2024-07-05T14:37:09Z",
      content:
        "We might be preoccupied with Wimbledon and the Euros right now, but it really isn’t long until the 2024 Olympics begin in Paris. On Friday July 26, the French capital will host what promises to be an… [+3913 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Press Trust of India",
      title: "'BCCI Cannot Give All Finals To Wankhede': Former IPL Chairman",
      description:
        'Following a huge turnout in Team India\'s celebration of the T20 World Cup win, Shiv Sena leader Aaditya Thackeray urged BCCI to "never take a final away from Mumbai".',
      url: "https://sports.ndtv.com/cricket/bcci-cannot-give-all-finals-to-wankhede-former-ipl-chairman-in-response-to-shiv-sena-leader-6041619",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/atna4c9o_india-wankhede_625x300_05_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
      publishedAt: "2024-07-05T14:22:11Z",
      content:
        "The BCCI cannot prioritise one city over another when it comes to organising important finals, said board's vice-president on Friday in response to Shiv Sena leader Aaditya Thackeray's demand. Follow… [+2087 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Abhishek Singh",
      title:
        "India vs Zimbabwe 1st T20I: Playing 11, live time (IST) and live streaming",
      description:
        "India vs Zimbabwe 1st T20I Playing 11 prediction: It will be interesting to see India's playing 11 combinations as they have too many young faces to accommodate",
      url: "https://www.business-standard.com/cricket/news/india-vs-zimbabwe-1st-t20i-playing-11-live-time-ist-and-live-streaming-124070501037_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/05/thumb/featurecrop/400X400/1720187934-6455.jpg",
      publishedAt: "2024-07-05T14:22:07Z",
      content:
        "India vs Zimbabwe 1st T20I Playing 11 prediction: It will be interesting to see India's playing 11 combinations as they have too many young faces to accommodate\r\nIndia vs Zimbabwe playing 11 , live s… [+2882 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        '"Started Cheering For SA": Ind Star\'s Revelation On WC Final, With A Twist',
      description:
        "The young India player is part of the squad that is touring Zimbabwe for a five-match T20I series, starting July 6.",
      url: "https://sports.ndtv.com/cricket/started-cheering-for-south-africa-young-india-stars-revelation-on-t20-world-cup-final-but-with-a-twist-6040293",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/7lcs0a1o_team-india_625x300_05_July_24.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
      publishedAt: "2024-07-05T14:12:15Z",
      content:
        "Young India wicket-keeper Dhruv Jurel has revealed that he was cheering for South Africa during the side's 2024 T20 World Cup final against India in Barbados. In the summit clash, India won by seven … [+1999 chars]",
    },
    {
      source: {
        id: null,
        name: "Frandroid",
      },
      author: "Axel Savoye",
      title:
        "Xbox Game Pass en juillet 2024 : Smash Bros. à la sauce Nickelodeon et du contenu pour Palworld",
      description:
        "Avec les grandes vacances qui ont démarré, on se retrouve avec plus de temps à tuer et si la météo ne nous permet pas de sortir, le Game Pass est toujours un bon moyen de se divertir. Voici d'ailleurs la première fournée de jeux du mois qui entre au catalogue.",
      url: "https://www.frandroid.com/services/jeux-video/2070168_xbox-game-pass-en-juillet-2024-smash-bros-a-la-sauce-nickelodeon-et-du-contenu-pour-palworld",
      urlToImage:
        "https://images.frandroid.com/wp-content/uploads/2024/07/Palworld-Sakurajima.webp",
      publishedAt: "2024-07-05T14:04:24Z",
      content:
        "Avec les grandes vacances qui ont démarré, on se retrouve avec plus de temps à tuer et si la météo ne nous permet pas de sortir, le Game Pass est toujours un bon moyen de se divertir. Voici d'ailleur… [+2777 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "Rohit, Suryakumar's banter on 'The Catch' captivates Maharashtra Assembly",
      description:
        "Cricket outshone politics in Maharashtra Legislature on Friday as Rohit Sharma and other T20 World Cup winning team members from the city were honoured at the Vidhan Bhawan.\nWhen Suryakumar Yadav, who took the incredible match-defining catch in the T20 World …",
      url: "https://www.business-standard.com/cricket/icc-t20-world-cup/rohit-suryakumar-s-banter-on-the-catch-captivates-maharashtra-assembly-124070500940_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/02/thumb/fitandfill/400X400/1719895811-0482.jpg",
      publishedAt: "2024-07-05T13:57:06Z",
      content:
        "When Suryakumar Yadav, who took the incredible match-defining catch in the T20 World Cup final against South Africa rose to speak, those in the Central Hall, including ministers and legislators, chan… [+630 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Neha Surana",
      title: "Will in-form India make short work of South Africa yet again?",
      description:
        "Cricket News: CHENNAI: After a gripping one-off Test, India and South Africa women will be back in whiteball action when the three-match T20I series gets underway a.",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/will-in-form-india-make-short-work-of-south-africa-yet-again/articleshow/111518530.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-111518513,width-1070,height-580,imgsize-1248185,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2024-07-05T13:55:26Z",
      content:
        "T20 World Cup: Top 5 bowlers with the lowest economy min 20 overs",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "ANI",
      title:
        '"As if they won World Cup": Rohit Pawar slams Mahayuti over photos of political leaders at felicitation event at CM\'s residence',
      description:
        "Rohit Pawar raises concerns over political photos at CM's residence post T20 World Cup win. Indian team members meet Maharashtra CM and PM Modi to celebrate victory over South Africa. Bumrah named 'Player of the Tournament' after India's historic win ending 1…",
      url: "https://economictimes.indiatimes.com/news/politics-and-nation/as-if-they-won-world-cup-rohit-pawar-slams-mahayuti-over-photos-of-political-leaders-at-felicitation-event-at-cms-residence/articleshow/111518452.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-111518460,width-1200,height-630,imgsize-35940,overlay-economictimes/photo.jpg",
      publishedAt: "2024-07-05T13:48:56Z",
      content:
        "Nationalist Congress Party - Sharadchandra Pawar leader Rohit Pawar slammed the Mahayuti government for putting up photos of political party leaders at the Chief Minister's official residence where m… [+2683 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "PTI",
      title:
        "BCCI cannot prioritise one city over another for hosting key matches, says Rajeev Shukla",
      description:
        "The BCCI's vice-president addressed concerns on Friday, responding to a request by Shiv Sena leader Aaditya Thackeray. Thackeray had asked that the BCCI ensure Mumbai does not miss out on hosting important final matches following the massive turnout during th…",
      url: "https://economictimes.indiatimes.com/news/sports/bcci-cannot-prioritise-one-city-over-another-for-hosting-key-matches-says-rajeev-shukla/articleshow/111518448.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-111518492,width-1200,height-630,imgsize-113268,overlay-economictimes/photo.jpg",
      publishedAt: "2024-07-05T13:48:49Z",
      content:
        "Mumbai: The BCCI cannot prioritise one city over another when it comes to organising important finals, said board's vice-president on Friday in response to Shiv Sena leader Aaditya Thackeray's demand… [+2053 chars]",
    },
    {
      source: {
        id: null,
        name: "Deadline",
      },
      author: "Sara Merican",
      title:
        "Netflix Sets August Launch For Doc On ‘RRR’ & ‘Baahubali’ Filmmaker S.S. Rajamouli",
      description:
        "Netflix will release biographical documentary Modern Masters: SS Rajamouli on August 2, shedding light on the Indian filmmaker behind titles like Baahubali and RRR. Presented by Anupama Chopra, the documentary features insights on S.S. Rajamouli from James Ca…",
      url: "http://deadline.com/2024/07/netflix-ss-rajamouli-modern-masters-doc-august-1236000590/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/09/GettyImages-1469357587-e1695050243886.jpg?w=1024",
      publishedAt: "2024-07-05T13:37:56Z",
      content:
        "Netflix will release biographical documentary Modern Masters: SS Rajamouli on August 2, shedding light on the Indian filmmaker behind titles like Baahubali and RRR.\r\nPresented by Anupama Chopra, the … [+2171 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Be Staff",
      title:
        "Broadcasting: Sony Sports Network acquires television rights for Major League Cricket, ET BrandEquity",
      description:
        "Culver Max Entertainment, who owns and operates Sony Sports Network, the leading sports broadcaster in India, is delighted to announce the acquisition of exclusive television rights for T20 cricket spectacle Major League Cricket (MLC) for one year in India. A…",
      url: "https://brandequity.economictimes.indiatimes.com/news/marketing/sony-sports-network-acquires-television-rights-for-major-league-cricket/111517965",
      urlToImage:
        "https://etimg.etb2bimg.com/thumb/msid-111517965,imgsize-184310,width-1200,height=765,overlay-etbrandequity/marketing/sony-sports-network-acquires-television-rights-for-major-league-cricket.jpg",
      publishedAt: "2024-07-05T13:35:06Z",
      content:
        "(Representative Image)\r\nCulver Max Entertainment, who owns and operates Sony Sports Network, the leading sports broadcaster in India, is delighted to announce the acquisition of exclusive television … [+2127 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title:
        'Hugh Jackman Calls Rohit Sharma His Favorite Indian Cricketer, Says "He Was A Beast"',
      description:
        "The Australian actor, whose film Deadpool & Wolverine is set to release on July 26, revealed that he is an avid cricket fan",
      url: "https://www.ndtv.com/entertainment/hugh-jackman-reveals-rohit-sharma-is-his-favourite-indian-cricketer-calls-him-a-beast-6040497",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/uvvbbg88_j_625x300_05_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
      publishedAt: "2024-07-05T13:25:17Z",
      content:
        "This image was shared on Instagram (courtesy: Hugh Jackman)\r\nDelhi: Hollywood actor Hugh Jackman is set to feature in the upcoming Marvel film Deadpool &amp; Wolverine  and is currently busy in promo… [+1334 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Press Trust of India",
      title:
        "Maharashtra CM Announces Rs 11 Cr Reward For Team India After T20WC Win",
      description:
        "He specifically praised Suryakumar Yadav's remarkable catch in the final match against South Africa.",
      url: "https://sports.ndtv.com/t20-world-cup-2024/maharashtra-chief-minister-announces-rs-11-crore-reward-for-t20-world-cup-winning-team-india-6041308",
      urlToImage:
        "https://c.ndtvimg.com/2024-07/1fvkaq2o_team-india_625x300_05_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
      publishedAt: "2024-07-05T13:19:58Z",
      content:
        "Maharashtra Chief Minister Eknath Shinde on Friday announced a cash reward of Rs 11 crore for the Indian cricket team which won the T20 World Cup. The announcement was made in the central hall of the… [+752 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "PTI",
      title:
        "Maharashtra CM announces Rs 11 crore reward for T20 World Cup-winning Indian team",
      description:
        "Maharashtra CM Eknath Shinde announced a cash reward of Rs 11 crore for the Indian cricket team's T20 World Cup win. He praised Suryakumar Yadav's catch in the final match and also honored support team members. Mumbai Police was recognized for their crowd man…",
      url: "https://economictimes.indiatimes.com/news/sports/maharashtra-cm-announces-rs-11-crore-reward-for-t20-world-cup-winning-indian-team/articleshow/111517892.cms",
      urlToImage:
        "https://img.etimg.com/thumb/msid-111517909,width-1200,height-630,imgsize-15076,overlay-economictimes/photo.jpg",
      publishedAt: "2024-07-05T13:19:11Z",
      content:
        "Maharashtra Chief Minister Eknath Shinde on Friday announced a cash reward of Rs 11 crore for the Indian cricket team which won the T20 World Cup.The announcement was made in the central hall of the … [+723 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "Keep your faith in us, we will not disappoint: Hockey skipper Harmanpreet",
      description:
        "Skipper Harmanpreet Singh understands that Indian men's hockey team will enter the Paris Games with huge expectations and promised to return from the French Capital with grand success which they would celebrate with passionate fans, just like the triumphant c…",
      url: "https://www.business-standard.com/sports/olympics/keep-your-faith-in-us-we-will-not-disappoint-hockey-skipper-harmanpreet-124070500854_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-02/12/thumb/featurecrop/400X400/1707708157-8613.jpg",
      publishedAt: "2024-07-05T13:14:53Z",
      content:
        '"We have the best rusher and goalkeeper for PC defence but still drag-flick is getting difficult by the day. We have worked hard on this, we are analysing our rivals, who is their first rusher, what … [+388 chars]',
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "insider@insider.com (Brendan Griffiths)",
      title:
        "Euro 2024: Where to watch a free Spain vs. Germany live stream from anywhere",
      description:
        "This is a huge game at Euro 2024 and you can see it free. Our international guide shows you where to watch Spain vs. Germany today.",
      url: "https://www.businessinsider.com/guides/streaming/euro-2024-where-to-watch-spain-vs-germany-live-stream-free",
      urlToImage:
        "https://i.insider.com/6686c264268f62ba18a78ebe?width=1200&format=jpeg",
      publishedAt: "2024-07-05T13:00:02Z",
      content:
        "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nThis is easily the biggest matchup of Euro 2024 so far, featuring the two most entertaining teams we've … [+8393 chars]",
    },
    {
      source: {
        id: null,
        name: "Business Standard",
      },
      author: "Press Trust of India",
      title:
        "T20WC: Logistical hassle surrounds Caribbean's first ICC event in 14 years",
      description:
        "The recently-concluded T20 World Cup, which was the first ICC men's event in the Caribbean in 14 years, was a success on many fronts but the logistical challenges involved in staging the massive event in the region caused a lot of discomfort to the game's sta…",
      url: "https://www.business-standard.com/cricket/icc-t20-world-cup/t20wc-logistical-hassle-surrounds-caribbean-s-first-icc-event-in-14-years-124070500755_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/30/thumb/featurecrop/400X400/1719695025-2178.jpg",
      publishedAt: "2024-07-05T12:52:01Z",
      content:
        "ICC fulfilled its vision of hosting World Cup outside cricket's big three while Cricket West Indies reaped the benefits of hosting the big-ticket competition that gave it financial security\r\nLogistic… [+5590 chars]",
    },

  ];
  constructor() {
    super();
    this.state = {
      articles: this.article,
      loading: false,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=6baa6cc829704bae8f9ed5306a30d17e";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ article: parsedData.articles });
  }

  render() {
    return (
      <div className="container">
        <h1 className="my-1">DailyNews</h1>
        <div className="row my-5">
          {this.state.articles.map((el) => {
            return (
              <div className="col-sm-12 col-md-12 col-lg-3 my-2" key={el.url}>
                <NewsItem
                  title={el.title?el.title.slice(0, 40):""}
                  description={el.description?el.description.slice(0, 80):""}
                  imgURL={el.urlToImage}
                  newsURL={el.url}
                ></NewsItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;

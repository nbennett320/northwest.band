import React, { Component } from 'react'

import './css/lyrics.css'

class AreaCodeLyrics extends Component {

    constructor(props) {
        super (props)

        this.state = {
            styles: ''
        }
    }

    resource = [
        {
            title: 'Fader',
            date: 'July 15, 2018',
            lyrics: ["She left in the winter","Without a word","Last time we spoke","I think her words were slurred","","Yeah I'll forget her","Except when the weather","Turns all rainy","And I think I'd upset her","","Don't forget me, baby","Don't forget me, baby","","Does she reget it","Cause she probably doesn't","I nod off again","And contemplate what it was","Do you know","How I feel","At the end","Of somedays","When I have","No one to talk to","Just a screen","At which I gaze","","Don't forget me, baby","Don't forget me, baby..."],
            image: './img/misc/landn1.png',
            altText: 'pic of lukas and noah in forest',
            key: 'fader'
        },

        {
            title: 'Flake',
            date: 'July 15, 2018',
            lyrics: ["Sorry, I can't make it","Said I was sick but I faked it","Wanna play but I hate it","","Emotional in the evening","I'm getting close to achieving","A feeling that I won't be leaving soon","I feel like my heart's dry heaving","","Sorry, I can't make it","Said I was sick but I faked it","Wanna play but I hate it","Wanna play but I hate it...","","Emotional in the evening","I'm getting close to achieving","A feeling that I won't be leaving soon","I feel like my heart's dry heaving"],
            image: './img/misc/lukas1.png',
            altText: 'pic of lukas in school',
            key: 'flake'
        },

        {
            title: 'Lover',
            date: 'July 15, 2018',
            lyrics: ["Those summer plans with your lover","Won't work out 'cause you'll find one","","Although it's quite pessimistic","Based on youth, it's realistic","","Can we last through spring time","And make it 'til summer where I lie","For hours with you in my arms","We'll live life on our own terms","","Oh, its only a matter of time","I'll see you and life will be just fine","I just want this insecurity to go away","So that I can pretend to feel okay"],
            image: './img/misc/hayden1.png',
            altText: 'pic of hayden at beach',
            key: 'lover'
        },

        {
            title: 'Quink',
            date: 'July 15, 2018',
            lyrics: ["Wish I could trash sometimes","Not just delete some photos","From my timeline","My hindsight is below the average kind","","And if I get rid of my public posts","Would I seem less confident than most?","","           Fourty years ago relationships","Were not dependent on this shit","Insecure kids were separate","From the ones who had a better fit","Wonder how I'd be if I lived then","Would I find the one?","Would I have my friends?","I'd probably not be that different","But I'd probably have more confidence"],
            image: './img/misc/band1.png',
            altText: 'pic of blake hayden and noah',
            key: 'quink'
        },

        {
            title: 'Rendezvous',
            date: 'July 15, 2018',
            lyrics: ["I'll come over","When the sunset is over","The warm night air","And fingers through your hair","","Don't worry","I'll make it there safely","I'll run past the county","I'll get where I need to be","","Talk softly","Before we get coffee","Your home's empty","So there's no need to worry","","Last night","When you held me so closely","My stress slipped away from me","I finally felt okay"],
            image: './img/misc/rainbow1.png',
            altText: 'pic of noah and rainbow',
            key: 'rendezvous'
        },

        {
            title: 'Stay W. Me 2nite',
            date: 'July 15, 2018',
            lyrics: ["Stay up for a little while","Talk to me, lets go get","Coffee tomorrow","But not 'til three","","It's three A.M. and I gotta go","It's not like I'm saying no","But I only wanted to stay 'til eight","I didn't want to stay this late...","","Stay with me tonight","Staring at the clouds","And at the bluish","Moonlight","","Unless you leave","I won't put up a fight","Tonight","","You said I belong","So I lay and ponder","Oh, that night","Was all","Thinking back to","Every conversation","We had","","Stay with me tonight","Staring at the clouds","And at the bluish","Moonlight","","Unless you leave","I won't put up a fight","Tonight"],
            image: './img/misc/landn2.png',
            altText: 'noah and lukas in forest',
            key: 'swmtn'
        },

    ]

    getSong = song => {
        switch (song) {
            case 'fader':
                return this.getFaderLyrics()
            case 'flake':
                return this.getFlakeLyrics()
            case 'lover':
                return this.getLoverLyrics()
            case 'quink':
                return this.getQuinkLyrics()
            case 'rendezvous':
                return this.getRendezvousLyrics()
            case 'swmtn':
                return this.getSwmtnLyrics()
            default: console.log("not a song")
        }
    }

    renderLyrics = lyrics => {
        let stringArr = []
        console.log(lyrics)

        for(let i = 0; i < lyrics.length; i++) {
            
            stringArr.push( <div className="lines" style={styles.lines}>{lyrics[i]}</div> )

        }

        return stringArr
    }

    render () {
        const song = this.resource.find(() => this.props.songKey)

        return (

            <div className='lyrics' style={styles.main}>
                
                <div style={styles.head}>
                    <h2 className='song-title' style={styles.title}>{song.title}</h2>
                    <h2 className='song-date' style={styles.date}>{song.date}</h2>
                </div>

                <div className='lyrics-body' style={styles.body}>
                
                    {this.renderLyrics(song.lyrics)}
                
                </div>

                <img className='misc-img' src={require( `${song.image}` )} alt={song.altText} />
                
            </div>

        )

    }

}

const styles = {
    main: {
        backgroundColor: '#e8e1b3',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        paddingTop: 'calc(8vh + 30px)',
        // letterSpacing: '1px',
    },

    head: {
        width: '50%',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignText: 'left',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: '600',
        fontSize: '2em',
    },

    title: {
        color: '#000',
    },

    date: {
        fontSize: '70%',
    },

    body: {
        width: '50%',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontWeight: '1',
        fontSize: '70%',
    },

    lines: {
        fontSize: '2en',
    }

}

export default AreaCodeLyrics
import React, { Component } from 'react'
import LyricsComponent from './components/LyricsComponent'
import Footer from './components/Footer'

import './css/lyrics.css'

class Lyrics extends Component {

    constructor(props) {
        super (props)

        this.state = {
            styles: ''
        }
    }

    componentWillMount () {

        const { songKey } = this.props.match.params

    }

    resource = {
        'fader': {
            title: 'Fader',
            date: 'July 15, 2018',
            lyrics: ["She left in the winter","Without a word","Last time we spoke","I think her words were slurred","","Yeah I'll forget her","Except when the weather","Turns all rainy","And I think I'd upset her","","Don't forget me, baby","Don't forget me, baby","","Does she reget it","Cause she probably doesn't","I nod off again","And contemplate what it was","Do you know","How I feel","At the end","Of somedays","When I have","No one to talk to","Just a screen","At which I gaze","","Don't forget me, baby","Don't forget me, baby..."],
            image: './img/misc/landn1.png',
            altText: 'pic of lukas and noah in forest',
            key: 'fader'
        },

        'flake':{
            title: 'Flake',
            date: 'July 15, 2018',
            lyrics: ["Sorry, I can't make it","Said I was sick but I faked it","Wanna play but I hate it","","Emotional in the evening","I'm getting close to achieving","A feeling that I won't be leaving soon","I feel like my heart's dry heaving","","Sorry, I can't make it","Said I was sick but I faked it","Wanna play but I hate it","Wanna play but I hate it...","","Emotional in the evening","I'm getting close to achieving","A feeling that I won't be leaving soon","I feel like my heart's dry heaving"],
            image: './img/misc/lukas1.png',
            altText: 'pic of lukas in school',
            key: 'flake'
        },

        'lover':{
            title: 'Lover',
            date: 'July 15, 2018',
            lyrics: ["Those summer plans with your lover","Won't work out 'cause you'll find one","","Although it's quite pessimistic","Based on youth, it's realistic","","Can we last through spring time","And make it 'til summer where I lie","For hours with you in my arms","We'll live life on our own terms","","Oh, its only a matter of time","I'll see you and life will be just fine","I just want this insecurity to go away","So that I can pretend to feel okay"],
            image: './img/misc/hayden1.png',
            altText: 'pic of hayden at beach',
            key: 'lover'
        },

        'quink':{
            title: 'Quink',
            date: 'July 15, 2018',
            lyrics: ["Wish I could trash sometimes","Not just delete some photos","From my timeline","My hindsight is below the average kind","","And if I get rid of my public posts","Would I seem less confident than most?","","           Fourty years ago relationships","Were not dependent on this shit","Insecure kids were separate","From the ones who had a better fit","Wonder how I'd be if I lived then","Would I find the one?","Would I have my friends?","I'd probably not be that different","But I'd probably have more confidence"],
            image: './img/misc/band1.png',
            altText: 'pic of blake hayden and noah',
            key: 'quink'
        },

        'rendezvous':{
            title: 'Rendezvous',
            date: 'July 15, 2018',
            lyrics: ["I'll come over","When the sunset is over","The warm night air","And fingers through your hair","","Don't worry","I'll make it there safely","I'll run past the county","I'll get where I need to be","","Talk softly","Before we get coffee","Your home's empty","So there's no need to worry","","Last night","When you held me so closely","My stress slipped away from me","I finally felt okay"],
            image: './img/misc/rainbow1.png',
            altText: 'pic of noah and rainbow',
            key: 'rendezvous'
        },

        'swmtn':{
            title: 'Stay W. Me 2nite',
            date: 'July 15, 2018',
            lyrics: ["Stay up for a little while","Talk to me, lets go get","Coffee tomorrow","But not 'til three","","It's three A.M. and I gotta go","It's not like I'm saying no","But I only wanted to stay 'til eight","I didn't want to stay this late...","","Stay with me tonight","Staring at the clouds","And at the bluish","Moonlight","","Unless you leave","I won't put up a fight","Tonight","","You said I belong","So I lay and ponder","Oh, that night","Was all","Thinking back to","Every conversation","We had","","Stay with me tonight","Staring at the clouds","And at the bluish","Moonlight","","Unless you leave","I won't put up a fight","Tonight"],
            image: './img/misc/landn2.png',
            altText: 'noah and lukas in forest',
            key: 'swmtn'
        },

        'newfeel':{
            title: 'New Feel',
            date: 'January 25, 2019',
            lyrics: ["It was a new feel","Getting to know you","A clear mind and I know","I miss it so much","","(The ground wet from snow)","","Memories of unknown elation","Yet","My insecurity's a firm integration","Yeah...","","(I'm still the same wreck)","","Writing songs doesn't help my case","When I'm focused on a feeling","That has gone away","I mean...","I was nervous","And you were too","I'm comfortable for the most part","And I'm good with you","","(I'm good with you)","(I'm good with you...)","","I have an old feel","That continues to haunt me","I thought commitment would kill it","I guess not","","(I guess not)","","I tell myself","I'm gonna act different","But situations arise","I still act the same","","I stay stagnant but the seasons change","I'm still bitter but you love the same","For you I'll try for a better day","I don't deserve all the things you say","","I stay stagnant but the seasons change","I'm still bitter but you love the same","For you I'll try for a better day","I don't deserve all the things you say..."],
            image: './img/misc/band2.png',
            altText: 'northwest at their first non-garage concert',
            key: 'newfeel'
        },

        'comearound':{
            title: 'Come Around',
            date: 'June 14, 2019',
            lyrics: ["Baby","I wish we could calm down","I wish you could come around","Wanna let my guard down for you","","Baby","I wish we could calm down","I wish you could come around","Wanna let you through","","Been a tense past couple of months now","These problems don't fix themselves","My head's turning and I don't think I'm learning","I've got more problems under my belt","","You say","Don't be sorry I know how you feel","You say","The way you feel right now is surreal","","Baby","I wish we could calm down","I wish you could come around","Wanna let my guard down for you","","Baby","I wish we could calm down","I wish you could come around","Wanna let you through","","A little time should fix how I am now","Should I keep that point of view?","I'll be alright when the day turns to night","How we cope isn't how we grew","","I'll be one call away","Just know that I'll still say this","","Baby","I wish we could calm down","I wish you could come around","Wanna let my guard down for you","","Baby","I wish we could calm down","I wish you could come around","Wanna let you through"],
            image: './img/misc/dog1.jpg',
            altText: 'northwest and leo',
            key: 'comearound'
        },

    }

    getStyles = song => {

        const areacode = {

            backgroundColor: '#e8e1b3',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            paddingTop: 'calc(8vh + 30px)',
            height: 'auto',

        }

        const newfeel = {

            backgroundColor: '#accdff',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            paddingTop: 'calc(8vh + 30px)',
            height: 'auto',
        }

        const comearound = {

            backgroundColor: '#ffffe0',
            display: 'flex',
            flexDirection: 'column',
            alignContent: 'center',
            paddingTop: 'calc(8vh + 30px)',
            height: 'auto',

        }

        switch (song) {
            case 'fader':
                return areacode
            case 'flake':
                return areacode
            case 'lover':
                return areacode
            case 'quink':
                return areacode
            case 'rendezvous':
                return areacode
            case 'swmtn':
                return areacode
            case 'newfeel':
                return newfeel
            case 'comearound':
                return comearound
            default: console.log("not a song")
        }
    }

    renderLyrics = lyrics => {
        let stringArr = []

        for(let i = 0; i < lyrics.length; i++) {
            if(lyrics[i] !== ``){
                stringArr.push( <div className="lines" style={styles.lines} key={i}>{lyrics[i]}</div> )
            } else {
                stringArr.push( <br key={i} /> )
            }
            

        }

        return stringArr
    }

    render () {

        const song = this.resource[this.props.songKey]

        return (

            <div className='lyrics' style={styles.main}>
                
                <LyricsComponent

                />
                
                <Footer />
                
            </div>

        )

    }

}

const styles = {
    main: {
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        paddingTop: 'calc(8vh + 30px)',
    },

    

    body: {
        width: 'auto',
        marginTop: '10px',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '70%',
    },

    lines: {
        fontSize: '2en',
    }

}

export default Lyrics
import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import BuildLyricsPage from './BuildLyricsPage'
import Footer from './components/Footer'

import './css/lyrics.css'

class Lyrics extends Component {

    constructor(props) {
        super (props)

        this.state = {
            song: null,
            styles: null,
        }
    }

    componentWillMount () {

        const { songKey } = this.props.match.params

        this.setState({song: this.resource[`${songKey}`]})

        this.props.setHeaderLink('/music')

    }

    resource = {

        'fader': {
            title: 'Fader',
            date: 'July 15, 2018',
            album: 'area code',
            lyrics: ["She left in the winter","Without a word","Last time we spoke","I think her words were slurred","","Yeah I'll forget her","Except when the weather","Turns all rainy","And I think I'd upset her","","Don't forget me, baby","Don't forget me, baby","","Does she reget it","Cause she probably doesn't","I nod off again","And contemplate what it was","Do you know","How I feel","At the end","Of somedays","When I have","No one to talk to","Just a screen","At which I gaze","","Don't forget me, baby","Don't forget me, baby..."],
            image: './img/misc/landn1.png',
            altText: 'pic of lukas and noah in forest',
            key: 'fader'
        },

        'flake':{
            title: 'Flake',
            date: 'July 15, 2018',
            album: 'area code',
            lyrics: ["Sorry, I can't make it","Said I was sick but I faked it","Wanna play but I hate it","","Emotional in the evening","I'm getting close to achieving","A feeling that I won't be leaving soon","I feel like my heart's dry heaving","","Sorry, I can't make it","Said I was sick but I faked it","Wanna play but I hate it","Wanna play but I hate it...","","Emotional in the evening","I'm getting close to achieving","A feeling that I won't be leaving soon","I feel like my heart's dry heaving"],
            image: './img/misc/lukas1.png',
            altText: 'pic of lukas in school',
            key: 'flake'
        },

        'lover':{
            title: 'Lover',
            date: 'July 15, 2018',
            album: 'area code',
            lyrics: ["Those summer plans with your lover","Won't work out 'cause you'll find one","","Although it's quite pessimistic","Based on youth, it's realistic","","Can we last through spring time","And make it 'til summer where I lie","For hours with you in my arms","We'll live life on our own terms","","Oh, its only a matter of time","I'll see you and life will be just fine","I just want this insecurity to go away","So that I can pretend to feel okay"],
            image: './img/misc/hayden1.png',
            altText: 'pic of hayden at beach',
            key: 'lover'
        },

        'quink':{
            title: 'Quink',
            date: 'July 15, 2018',
            album: 'area code',
            lyrics: ["Wish I could trash sometimes","Not just delete some photos","From my timeline","My hindsight is below the average kind","","And if I get rid of my public posts","Would I seem less confident than most?","","           Fourty years ago relationships","Were not dependent on this shit","Insecure kids were separate","From the ones who had a better fit","Wonder how I'd be if I lived then","Would I find the one?","Would I have my friends?","I'd probably not be that different","But I'd probably have more confidence"],
            image: './img/misc/band1.png',
            altText: 'pic of blake hayden and noah',
            key: 'quink'
        },

        'rendezvous':{
            title: 'Rendezvous',
            date: 'July 15, 2018',
            album: 'area code',
            lyrics: ["I'll come over","When the sunset is over","The warm night air","And fingers through your hair","","Don't worry","I'll make it there safely","I'll run past the county","I'll get where I need to be","","Talk softly","Before we get coffee","Your home's empty","So there's no need to worry","","Last night","When you held me so closely","My stress slipped away from me","I finally felt okay"],
            image: './img/misc/rainbow1.png',
            altText: 'pic of noah and rainbow',
            key: 'rendezvous'
        },

        'swmtn':{
            title: 'Stay W. Me 2nite',
            date: 'July 15, 2018',
            album: 'area code',
            lyrics: ["Stay up for a little while","Talk to me, lets go get","Coffee tomorrow","But not 'til three","","It's three A.M. and I gotta go","It's not like I'm saying no","But I only wanted to stay 'til eight","I didn't want to stay this late...","","Stay with me tonight","Staring at the clouds","And at the bluish","Moonlight","","Unless you leave","I won't put up a fight","Tonight","","You said I belong","So I lay and ponder","Oh, that night","Was all","Thinking back to","Every conversation","We had","","Stay with me tonight","Staring at the clouds","And at the bluish","Moonlight","","Unless you leave","I won't put up a fight","Tonight"],
            image: './img/misc/landn2.png',
            altText: 'noah and lukas in forest',
            key: 'swmtn'
        },

        'new-feel':{
            title: 'New Feel',
            date: 'January 25, 2019',
            album: 'suburban dogs',
            lyrics: ["It was a new feel","Getting to know you","A clear mind and you know","I miss it so much","","(The ground wet from snow)","","Memories of unknown elation","Yet","My insecurity's a firm integration","Yeah","","(I'm still the same wreck)","","Writing songs doesn't help my case","When I'm focused on a feeling","That has gone away","I mean","I was nervous","And you were too","I'm comfortable for the most part","And I'm good with you","","(I'm good with you)","(I'm good with you)","","I have an old feel","That continues to haunt me","I thought commitment would kill it","I guess not","","(I guess not)","","I tell myself","I'm gonna act different","But situations arise","I still act the same","","(I Wish I could change)","","I stay stagnant but the seasons change","I'm still bitter but you love the same","For you I'll try for a better day","I don't deserve all the things you say","","I stay stagnant but the seasons change","I'm still bitter but you love the same","For you I'll try for a better day","I don't deserve all the things you say"],
            image: './img/misc/band2.png',
            altText: 'northwest at their first non-garage concert',
            key: 'new-feel'
        },

        'come-around':{
            title: 'Come Around',
            date: 'June 14, 2019',
            album: 'suburban dogs',
            lyrics: ["Baby","I wish we could calm down","I wish you could come around","Wanna let my guard down for you","","Baby","I wish we could calm down","I wish you could come around","Wanna let you through","","Been a tense past couple of months now","These problems won't fix themselves","My head's turning and I don't think I'm learning","I've got more problems under my belt","","You say","Don't be sorry I know how you feel","You say","The way you feel right now is surreal","","Baby","I wish we could calm down","I wish you could come around","Wanna let my guard down for you","","Baby","I wish we could calm down","I wish you could come around","Wanna let you through","","A little time should fix how I am now","But should I keep that point of view?","I'll be alright when the day turns from night","How I cope isn't how we grew","","I'll be one call away","Just know that I'll still say this","","Baby","I wish we could calm down","I wish you could come around","Wanna let my guard down for you","","Baby","I wish we could calm down","I wish you could come around","Wanna let you through"],
            image: './img/misc/dog1.jpg',
            altText: 'northwest and leo',
            key: 'come-around'
        },

        'dog': {
            title: 'Dog',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["I wanna be someone", "other than myself", "I'd like to see it's like", "out of this hell", "of temporary joy and", "oh i'm a disappointment", "to you people here", "", "and it feels like we're", "suburban dogs", "we sit around and wait", "for something to come along", "i'll stare into the backyard", "until the sky gets too dark", "to be out the house"],
            image: './img/misc/dog2.jpg',
            altText: 'leo biting lukas\'s shoe',
            key: 'dog'
        },

        'uneasy': {
            title: 'Uneasy',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["last night you spoke free", "about your hidden worries", "\"don't you ever leave me,\"", "\"I wanna be your only\"", "", "morning came uneasy", "my head was fucked up, dizzy", "my vision not quite stable", "red cups still on the table", "", "so if you think i'm lost", "or if my heart dropped off", "just tell me if yuo thought", "i wouldn't tell your wrong", "", "remember in the day", "you got out of hangover", "your mood was dampened", "by not being sober", "I still loved that day", "I don't think there's a way", "you'd tell me all the things", "you told me, I love that exchange", "", "lean on me", "calm down", "I got you now", "", "lean on me", "calm down", "I got you now", "", "lean on me", "calm down", "I got you now", "", "lean on me", "calm down", "I got you now", "", "lean on me", "calm down", "I got you now"],
            image: './img/misc/landn3.jpg',
            altText: 'lukas and noah jammming around',
            key: 'uneasy'
        },

        'porter-ave': {
            title: 'Porter Ave',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["i bet you'd love to hear", "that i'm sorry I lashed out", "well someday I might be,", "but I'm not there right now", "", "i know i broke my promise", "when the sky turned black", "but i still thought it was worth it", "as i headed back", "", "on the backroads to my lover", "outside of our town", "and i know you can't trust me anymore", "but there's nothing sweeter", "than loving her behind closed doors", "", "i'm sorry I am torn", "", "i wish it could be different", "when we hang out", "I wish our parents could", "work these dumb things out", "I'm sorry I fucked up", "forming a fake trust", "with this kind of love,", "should've been upfront", "", "i'm stuck inside a hole", "i can't get back out", "regret is rushing in,", "drowning out the sound", "of future summer days", "with the one i love", "it's becoming more apparent,", "shouldn't be this tough"],
            image: './img/misc/band4.jpg',
            altText: 'a scary night...',
            key: 'porter-ave'
        },

        'buddy': {
            title: 'Buddy',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["babe, you can't be serious", "is that really what you mean", "my heart just began to beat for you", "and my hand's still caught up on your jeans", "", "was I just a dancing partner", "so you didn't feel alone", "I thought we'd last out for the summer", "but now I'm stuck inside my home", "", "when we reached fourth quarter", "I was breaking at my seams", "I don't know what came over us", "and I don't know if it was just me", "", "maybe I was being naive", "to think we'd always be okay", "but when the leaves turn back to deep green", "I hope you'll love me all the same"],
            image: './img/misc/band5.jpg',
            altText: 'hanging around',
            key: 'buddy'
        },

        'crumb': {
            title: 'Crumb',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["I wanna focus on the good times", "they seem to pass as i write", "about em", "I want that blissful feeling", "from last summer", "where we only loved each other,", "missing calls from our mothers", "", "it doesn't come quite as easy", "a cloudy day fucks my whole week", "this issue", "I don't know if I've felt it for awhile", "but I know I haven't smiled", "and I don't know what's worthwhile"],
            image: './img/misc/blake1.jpg',
            altText: 'blake at da show',
            key: 'crumb'
        },

        'miss-me': {
            title: 'Miss Me',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["do you miss me", "the same anymore?", "I feel like you", "have changed", "since the fights before", "", "and in my mind", "I run through the times", "wrapped in the arms", "of security", "warm as the evening", "washed over me", "", "while you held me tight", "I mulled over the texts", "I broke my own heart", "thinking about you", "kissing his neck", "", "are we falling out again?", "cause its getting to a point that's similar", "to our last end", "", "and I internalize", "all my feelings", "and I keep them bottled up inside"],
            image: './img/misc/lukas2.jpg',
            altText: 'in the lab',
            key: 'miss-me'
        },

        'good-for-you': {
            title: 'Good For You',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["the sunset fades to black", "as stars reveal themselves", "how can you turn and walk away?", "", "think on the things you said", "refresh my feed once more", "didn't think I'd feel like this again", "", "goodbye for now she said", "heartbreak is good for you", "can't get her voice out of my head", "", "goodbye for now she said", "heartbreak is good for me", "can't get her voice out of my head", "", "we lost innocence and some", "joy is now an old feel", "I lost my trust and", "you needed your own time to heal", "", "somedays", "we find peace", "and connect", "how we once related", "", "somedays", "I can't find out", "why the fuck", "i'm even frustrated"],
            image: './img/misc/blake1.jpg',
            altText: 'blakeyyy',
            key: 'good-for-you'
        },

        'morgan-ave': {
            title: 'Morgan Ave',
            date: 'November 15, 2019',
            album: 'suburban dogs',
            lyrics: ["I want a change", "in this life soon", "I'm tired of the way I live", "and things I do", "", "My mood swings back and forth", "too much", "I'm young but I'm still numb", "to some ideas of trust", "", "(I still love you)"],
            image: './img/misc/band6.jpg',
            altText: 'we all jam',
            key: 'morgan-ave'
        },

    }

    getBackgroundColor = album => {

        let color

        switch (album) {
            case 'area code': 
                color = '#fffce6'
                break
            case 'suburban dogs': 
                color = '#accdff'
                break
            default: 
                console.log("error in building lyrics styles")
                color = '#fff'
                break
        }

        return color

    }

    render () {

        if(this.resource[`${this.songKey}`] === undefined) return <Redirect to='/music' />

        return (

            <div className='lyrics' style={{
                width: '100%',
                height: 'auto',
                minHeight: '100%',
                paddingTop: '0',
                backgroundColor: `${this.getBackgroundColor(this.state.song.album)}`,
            }}>
                
                <BuildLyricsPage
                    song={this.state.song}
                />
                
                <Footer />
                
            </div>

        )

    }

}

export default Lyrics
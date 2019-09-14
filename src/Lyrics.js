import React, { Component } from 'react'

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
            lyrics: "She left in the winter\nWithout a word\nLast time we spoke\nI think her words were slurred\n\nYeah I'll forget her\nExcept when the weather\nTurns all rainy\nAnd I think I'd upset her\n\nDon't forget me, baby\nDon't forget me, baby\n\nDoes she reget it\nCause she probably doesn't\nI nod off again\nAnd contemplate what it was\nDo you know\nHow I feel\nAt the end\nOf somedays\nWhen I have\nNo one to talk to\nJust a screen\nAt which I gaze\n\nDon't forget me, baby\nDon't forget me, baby...\n",
            image: './img/misc/landn1.png',
            altText: 'pic of lukas and noah in forest',
            key: 'fader'
        },
    
        {
            title: 'Flake',
            date: 'July 15, 2018',
            lyrics: "Sorry, I can't make it\nSaid I was sick but I faked it\nWanna play but I hate it\n\nEmotional in the evening\nI'm getting close to achieving\nA feeling that I won't be leaving soon\nI feel like my heart's dry heaving\n\nSorry, I can't make it\nSaid I was sick but I faked it\nWanna play but I hate it\nWanna play but I hate it...\n\nEmotional in the evening\nI'm getting close to achieving\nA feeling that I won't be leaving soon\nI feel like my heart's dry heaving\n",
            image: './img/misc/lukas1.png',
            altText: 'pic of lukas in school',
            key: 'flake'
        },
    
        {
            title: 'Lover',
            date: 'July 15, 2018',
            lyrics: "Those summer plans with your lover\nWon't work out 'cause you'll find one\n\nAlthough it's quite pessimistic\nBased on youth, it's realistic\n\nCan we last through spring time\nAnd make it 'til summer where I lie\nFor hours with you in my arms\nWe'll live life on our own terms\n\nOh, its only a matter of time\nI'll see you and life will be just fine\nI just want this insecurity to go away\nSo that I can pretend to feel okay\n",
            image: './img/misc/hayden1.png',
            altText: 'pic of hayden at beach',
            key: 'lover'
        },
    
        {
            title: 'Quink',
            date: 'July 15, 2018',
            lyrics: "Wish I could trash sometimes\nNot just delete some photos\nFrom my timeline\nMy hindsight is below the average kind\n\nAnd if I get rid of my public posts\nWould I seem less confident than most?\n\n           Fourty years ago relationships\nWere not dependent on this shit\nInsecure kids were separate\nFrom the ones who had a better fit\nWonder how I'd be if I lived then\nWould I find the one?\nWould I have my friends?\nI'd probably not be that different\nBut I'd probably have more confidence\n",
            image: './img/misc/band1.png',
            altText: 'pic of blake hayden and noah',
            key: 'quink'
        },
    
        {
            title: 'Rendezvous',
            date: 'July 15, 2018',
            lyrics: "I'll come over\nWhen the sunset is over\nThe warm night air\nAnd fingers through your hair\n\nDon't worry\nI'll make it there safely\nI'll run past the county\nI'll get where I need to be\n\nTalk softly\nBefore we get coffee\nYour home's empty\nSo there's no need to worry\n\nLast night\nWhen you held me so closely\nMy stress slipped away from me\nI finally felt okay\n",
            image: './img/misc/rainbow1.png',
            altText: 'pic of noah and rainbow',
            key: 'rendezvous'
        },
    
        {
            title: 'Stay W. Me 2nite',
            date: 'July 15, 2018',
            lyrics: "Stay up for a little while\nTalk to me, lets go get\nCoffee tomorrow\nBut not 'til three\n\nIt's three A.M. and I gotta go\nIt's not like I'm saying no\nBut I only wanted to stay 'til eight\nI didn't want to stay this late...\n\nStay with me tonight\nStaring at the clouds\nAnd at the bluish\nMoonlight\n\nUnless you leave\nI won't put up a fight\nTonight\n\nYou said I belong\nSo I lay and ponder\nOh, that night\nWas all\nThinking back to\nEvery conversation\nWe had\n\nStay with me tonight\nStaring at the clouds\nAnd at the bluish\nMoonlight\n\nUnless you leave\nI won't put up a fight\nTonight\n",
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

    render () {
        console.log(this.props.match.params)
        const song = this.resource.find(() => this.props.songKey)

        return (

            <div className='lyrics'>
                
                <h2 className='title'>{song.title}</h2>
                <h2 className='date'>{song.date}</h2>
                
                <p className='entry'>{song.lyrics}</p>

                <img className='misc-img' src={require( `${song.image}` )} alt={song.altText} />
                
            </div>

        )

    }

}

export default AreaCodeLyrics
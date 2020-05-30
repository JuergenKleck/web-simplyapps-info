import React from 'react';

export function ImageItem(props) {
    const [visible, setVisible] = React.useState(false);
    return (
        <div className={props.portrait ? 'column' : 'row row1'} key={props.number.id}>
            <div className="item" key={props.number.id}>
                <img className="screen" src={'/simplyapps/apps/' + props.appName + '/screen' + props.number.value.toString() + '.jpg'} key={props.number.id2} title={props.appTitle} />
            </div>
        </div>
    );
}

export function AppTemplate(props) {
    const portrait = props.portrait == 1;
    const teaser = props.teaser == 1;
    const screens = props.screens;
    const appName = props.app;
    const appTitle = props.title;
    const screenMap = [];
    for (let i = 0; i < screens; i++) {
        screenMap.push({ id: i + 1, id2: i + 100, value: i + 1 });
    }
    //const listItems = 
    const imgClassName = portrait ? "portrait" : "screenshots" ;
    return (
        <div className="contentWrap">
            <div className="appdetail">
                <div className="title">{appTitle}</div>
                <div className={'img-content ' + imgClassName}>
                    {teaser &&
                        <div className="teaser">
                          <img className="teaser-img" src={'/simplyapps/apps/' + appName + '/teaser.jpg'} title={appTitle} />
                        </div>
                    }
                    <div className="items">
                        {screenMap.map(number => <ImageItem key={number.id2} number={number} appTitle={appTitle} appName={appName} portrait={portrait} />)}
                    </div>
                </div>
                <div className="text">
                    <div className="description">{props.children}</div>
                    <div className="link">
                        <a className="play-link" target="_top" href={'https://play.google.com/store/apps/details?id=' + props.package}><img alt="Get it on Google Play" src="/simplyapps/images/en_badge_web_generic.png" /></a>
                    </div>
                </div>
            </div>                
        </div>
    );
}
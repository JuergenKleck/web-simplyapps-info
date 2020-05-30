import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { Content } from './content';
import { AppFishingCat } from './apps/fishingcat';
import { AppMemoryMaster } from './apps/memorymaster';
import { AppHedgehog } from './apps/hedgehog';
import { AppFeedTheCat } from './apps/feedthecat';
import { AppShoppingList } from './apps/shoppinglist';
import { AppWorkouter } from './apps/workouter';
import { AppBrick360 } from './apps/brick360';
import { AppAppointment } from './apps/appointment';
import { AppNotebook} from './apps/notebook';
import { AppColorMixLWP } from './apps/colormixlwp';
import { AppFishesLWP } from './apps/fisheslwp';
import { Privacy } from './privacy';

export function Navigation() {

    const AppNav = () => (
        <Router>
            <div className="nav-list apps">
                <div className="nav-item app"><Link to={'/'} className="nav-link"><div><div className="applogo"></div><div className="apptitle">{Content.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/privacy'} className="nav-link"><div><div className="applogo"></div><div className="apptitle">{Privacy.pageTitle()}</div></div></Link></div>
                <div className="nav-item-spacer app-spacer"></div>
                <div className="nav-item app"><Link to={'/apps/appointment'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/appointment/logo.png" /></div><div className="apptitle">{AppAppointment.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/brick360'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/brick360/logo.png" /></div><div className="apptitle">{AppBrick360.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/colormixlwp'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/colormix/logo.png" /></div><div className="apptitle">{AppColorMixLWP.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/feedthecat'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/feedthecat/logo.png" /></div><div className="apptitle">{AppFeedTheCat.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/fishingcat'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/fishingcat/logo.png" /></div><div className="apptitle">{AppFishingCat.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/fisheslwp'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/fishes/logo.png" /></div><div className="apptitle">{AppFishesLWP.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/hedgehog'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/hedgehog/logo.png" /></div><div className="apptitle">{AppHedgehog.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/memorymaster'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/memorymaster/logo.png" /></div><div className="apptitle">{AppMemoryMaster.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/notebook'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/notebook/logo.png" /></div><div className="apptitle">{AppNotebook.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/shoppinglist'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/shoppinglist/logo.png" /></div><div className="apptitle">{AppShoppingList.pageTitle()}</div></div></Link></div>
                <div className="nav-item app"><Link to={'/apps/workouter'} className="nav-link"><div><div className="applogo"><img src="/simplyapps/apps/workouter/logo.png" /></div><div className="apptitle">{AppWorkouter.pageTitle()}</div></div></Link></div>
            </div>
            <div className="screen_overlay" id="overlay">
            <Suspense fallback={<div className="loader">Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Content} />
                    <Route path="/apps/fishingcat" component ={AppFishingCat} />
                    <Route path="/apps/memorymaster" component ={AppMemoryMaster} />
                    <Route path="/apps/hedgehog" component ={AppHedgehog} />
                    <Route path="/apps/feedthecat" component ={AppFeedTheCat} />
                    <Route path="/apps/brick360" component={AppBrick360} />
                    <Route path="/apps/workouter" component={AppWorkouter} />
                    <Route path="/apps/appointment" component={AppAppointment} />
                    <Route path="/apps/notebook" component={AppNotebook} />
                    <Route path="/apps/shoppinglist" component={AppShoppingList} />
                    <Route path="/apps/colormixlwp" component={AppColorMixLWP} />
                    <Route path="/apps/fisheslwp" component={AppFishesLWP} />
                    <Route path="/privacy" component={Privacy} />
                </Switch>
                </Suspense>
            </div>
        </Router>
    );

    return (
        <AppNav />
    )
}

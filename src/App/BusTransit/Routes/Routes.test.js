import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-17';
import { CircularProgress } from "@material-ui/core"

import Route from './Route'
import Routes from './index'

configure({adapter: new Adapter()})

describe('Availbale Routes', () => {

    it("Should render <CircularProgress />, when list of routes are not loaded yet", () => {
        const wrapper = shallow(<Routes/>)

        wrapper.setProps({routesState: {loading: true}})

        expect(wrapper.find(CircularProgress)).toHaveLength(1)
    })

    it("Should List of Routes equal to the result is ajax call", () => {
        const wrapper = shallow(<Routes/>)

        wrapper.setProps({routesState: {loading: false}, 
            list: [{id: "1", displayName: "route 1"}, 
                {id: "2", displayName: "route 2"}
            ]})

        expect(wrapper.find(Route)).toHaveLength(2)
    })

});

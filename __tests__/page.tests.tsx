/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import {render,screen } from '@testing-library/react'
import {Choice2aSuccessUi, Choice2aFailUi} from '../src/app/DecisionUi/Choice2aUi'
import {Choice2bFailUi, Choice2bSuccessUi} from '../src/app/DecisionUi/Choice2bUi'
import {Choice2cFailUi, Choice2cSuccessUi} from '../src/app/DecisionUi/Choice2cUi'
import {Choice2dFailUi, Choice2dSuccessUi} from '../src/app/DecisionUi/Choice2dUi'
describe("Basic UI Tests",()=>{

it('loads items test text is rendered correctly 2ASuccess',()=>{
render(<Choice2aSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest1');
expect(successUiElement).toBeInTheDocument();
}),

it('loads items test text is rendered correctly 2AFail',()=>{
render(<Choice2aFailUi/>)
const successUiElement=screen.getByTestId('UiTest2');
expect(successUiElement).toBeInTheDocument();
}),
    
it('loads items test text is rendered correctly 2BSuccess',()=>{
render(<Choice2bSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest3');
expect(successUiElement).toBeInTheDocument();
}),
  
it('loads items test text is rendered correctly 2BFail',()=>{
render(<Choice2bFailUi/>)
const successUiElement=screen.getByTestId('UiTest4');
expect(successUiElement).toBeInTheDocument();
    })
test('loads items test text is rendered correctly 2CSuccess',()=>{
render(<Choice2cSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest5');
expect(successUiElement).toBeInTheDocument();
    })
                        
test('loads items test text is rendered correctly 2CFail',()=>{
render(<Choice2cFailUi/>)
    const successUiElement=screen.getByTestId('UiTest6');
    expect(successUiElement).toBeInTheDocument();
    })
        
test('loads items test text is rendered correctly 2DSuccess',()=>{
render(<Choice2dSuccessUi/>)
const successUiElement=screen.getByTestId('UiTest7');
expect(successUiElement).toBeInTheDocument();
    })
            
test('loads items test text is rendered correctly 2DFail',()=>{
render(<Choice2dFailUi/>)
const successUiElement=screen.getByTestId('UiTest8');
expect(successUiElement).toBeInTheDocument();
    })
})

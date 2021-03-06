import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Route, withRouter, Switch } from 'react-router-dom'
import ReactGA from 'react-ga'
import LeftMenu from './leftMenu/LeftMenu'
import LeftMenuMobile from './leftMenu/LeftMenu.mobile'
import Tabs from './tabs/Tabs'
import TabsMobile from './tabs/Tabs.mobile'
import ChartsTab1 from './charts/ChartsTab1'
import ChartsTab2 from './charts/ChartsTab2'
import ChartsTab3 from './charts/ChartsTab3'
import PageRenderer from './pages/PageRenderer'
import scenarioCombinations from './data/scenarioCombinations'

ReactGA.initialize('UA-145591344-2')
ReactGA.pageview(window.location.pathname + window.location.search)

const Page = styled.div`
  height: 100%;
  margin: 0px;
  display: flex;
  box-sizing: border-box;
`
const LeftColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: rgb(50,50,50);
`
const RightColumn = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
`
const Content = styled.div`
  flex-grow: 1; /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto; /*adds scroll to this container*/
  overflow-x: hidden;
`
const MainSwitch = styled(Switch)`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
`

export const changeScenario = (name, value) => {
  console.log("change name and value: ", {name, value})
  return({
  [name]: value,
})}
const default_scenario = scenarioCombinations.scenarioCombinations.scenarioOptions[0];
const countries = ['hr', 'dk', 'fr', 'de', 'it', 'nl', 'se' ];

const default_countries = ['hr'];
const options = []

scenarioCombinations.scenarioCombinations.scenarioOptions
  .filter(s => !s.opt0 && !s.op1 && !s.opt2 && !s.opt3)
  .forEach(s => {
    options[s.nameNoOptions] = {}
    options[s.nameNoOptions]['opt0'] = true
    options[s.nameNoOptions]['opt1'] = false
    options[s.nameNoOptions]['opt2'] = false
    options[s.nameNoOptions]['opt3'] = false
  })

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scenarioSelection: default_scenario.name,
      scenarioSelection2: '',
      showWelcome: true,
      showDifference: false,
      options: options,
      scenarioSelectionNoOptions: default_scenario.nameNoOptions,
      scenarioSelectionNoOptions2: '',
      selectedCountries: default_countries,
      selectedCountriesCost: default_countries,
  }
    this.scenarioCombinations = scenarioCombinations.scenarioCombinations
  }

  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
  }
  UpdateScenarioNames = () => {
    
    this.setState(state => {
      console.log("state: ", state)
      return {
        scenarioSelection:
          state.scenarioSelectionNoOptions +
          (state.options[state.scenarioSelectionNoOptions].opt0 ? '_Ambitious' : '') +
          (state.options[state.scenarioSelectionNoOptions].opt1 ? '_WEO-SD' : '') +
          (state.options[state.scenarioSelectionNoOptions].opt2 ? '_WEO-NP' : '') +
          (state.options[state.scenarioSelectionNoOptions].opt3 ? '_SAC' : ''),
      }
    })
    this.setState(state => {
      console.log("setting sc2")
      console.log("state.scenarioSelectionNoOptions2: ", state.scenarioSelectionNoOptions2)
      
      let t = state.scenarioSelectionNoOptions2 !== ''
      ? state.scenarioSelectionNoOptions2 +
        (state.options[state.scenarioSelectionNoOptions2].opt0
          ? '_Ambitious'
          : '') +
        (state.options[state.scenarioSelectionNoOptions2].opt1 ? '_WEO-SD' : '') +
        (state.options[state.scenarioSelectionNoOptions2].opt2 ? '_WEO-NP' : '') +
        (state.options[state.scenarioSelectionNoOptions2].opt3 ? '_SAC' : '')
      : ''
      console.log("new sc2 select: ", t)
      return {
        scenarioSelection2:
          state.scenarioSelectionNoOptions2 !== ''
            ? state.scenarioSelectionNoOptions2 +
              (state.options[state.scenarioSelectionNoOptions2].opt0
                ? '_Ambitious'
                : '') +
              (state.options[state.scenarioSelectionNoOptions2].opt1 ? '_WEO-SD' : '') +
              (state.options[state.scenarioSelectionNoOptions2].opt2 ? '_WEO-NP' : '') +
              (state.options[state.scenarioSelectionNoOptions2].opt3 ? '_SAC' : '')
            : '',
      }
    })
  }
  unselectToggles = (scenario) => {
    let newOptions = this.state.options
    Object.keys(this.state.options[scenario]).forEach(option => {
      newOptions[scenario][option] = false
    })
    this.setState({
      options: newOptions,
    })
  }
  UpdateScenarioSelection = (e, name, value) => {
    e.preventDefault()
    console.log("update scenario selection: ", value)
    console.log("this.state.scenarioSelectionNoOptions: ", this.state.scenarioSelectionNoOptions)
    console.log("this.state.scenarioSelectionNoOptions2: ", this.state.scenarioSelectionNoOptions2)
    if (this.state.scenarioSelectionNoOptions2 !== '') {
      if (value === this.state.scenarioSelectionNoOptions) {
        console.log("toggle1 and 2")
        this.setState(
          changeScenario(
            'scenarioSelectionNoOptions',
            this.state.scenarioSelectionNoOptions2
          )
        )
        this.setState(changeScenario('scenarioSelectionNoOptions2', ''))
        //this.unselectToggles(this.state.scenarioSelectionNoOptions2)
        this.setState({ showDifference: false })
      } else {
        console.log("off 2")
        if (value === this.state.scenarioSelectionNoOptions2) {
          this.setState(changeScenario('scenarioSelectionNoOptions2', ''))
          //this.unselectToggles(this.state.scenarioSelectionNoOptions2)
          this.setState({ showDifference: false })
        } else {
          this.setState(changeScenario('scenarioSelectionNoOptions2', value))
        }
      }
    } else {
      console.log("on2")
      if (value !== this.state.scenarioSelectionNoOptions) {
        this.setState(changeScenario('scenarioSelectionNoOptions2', value), ()=>{
        })
      }
    }
    this.UpdateScenarioNames()
  }


  CloseWelcomeWidget = (value = false) => {
    this.setState({ showWelcome: value })
  }
  
  ToggleDifference = e => {
    e.preventDefault()
    this.setState({ showDifference: !this.state.showDifference })
  }

  ToggleOption = (scenario, option) => {
    console.log("scenario: ", scenario)
    console.log("option: ", option)
    let newOptions = this.state.options
    console.log("Before options: ", this.state.options)
    newOptions[scenario].opt0 = false;
    newOptions[scenario].opt1 = false;
    newOptions[scenario].opt2 = false;
    newOptions[scenario][option] = !this.state.options[scenario][option]

    console.log("Aftr options: ", newOptions)
    this.setState({
      options: newOptions,
    })
    this.UpdateScenarioNames()
  }

  selectCountry = country => {
    if(this.state.selectedCountries.includes(country)) {
      this.setState({
        selectedCountries: [],
      })
    } else {
      this.setState({
        selectedCountries: [country],
      })
    }
  }
  selectCountryCost = country => {
    let newSelectedCountriesCost = this.state.selectedCountriesCost
    if (newSelectedCountriesCost.includes(country)) {
      newSelectedCountriesCost = newSelectedCountriesCost.filter(c => c !== country)
    } else {
      newSelectedCountriesCost.push(country)
    } 
   this.setState({
      selectedCountriesCost: newSelectedCountriesCost,
    })
  }

  render() {
    return (
      <Page>
        <LeftColumn>
          <Content>
            <LeftMenu
              selectedChartgroup={this.state.scenarioSelection}
              selectedPage={this.props.location.pathname}
              scenarioSelection={this.state}
              scenarioCombinations={this.scenarioCombinations}
              updateScenarioSelection={this.UpdateScenarioSelection}
              toggleDifference={this.ToggleDifference}
              options={this.state.options}
              toggleOption={this.ToggleOption}
              countries={countries}
              selectedCountries={this.state.selectedCountries}
              selectedCountriesCost={this.state.selectedCountriesCost}
              selectCountry={this.selectCountry}
              selectCountryCost={this.selectCountryCost}
            />
            <LeftMenuMobile
              selectedChartgroup={this.state.scenarioSelection}
              selectedPage={this.props.location.pathname}
              scenarioSelection={this.state}
              scenarioCombinations={this.scenarioCombinations}
              updateScenarioSelection={this.UpdateScenarioSelection}
              toggleDifference={this.ToggleDifference}
              options={this.state.options}
              toggleOption={this.ToggleOption}
              countries={countries}
              selectedCountries={this.state.selectedCountries}
              selectedCountriesCost={this.state.selectedCountriesCost}
              selectCountry={this.selectCountry}
              selectCountryCost={this.selectCountryCost}
            />
          </Content>
        </LeftColumn>
        <RightColumn>
          <Content>
            <Tabs selectedChartgroup={this.props.location.pathname} />
            <TabsMobile selectedChartgroup={this.props.location.pathname} />
            <MainSwitch>
              <Route
                exact
                path="/"
                render={() => (
                  <ChartsTab1
                    countries={countries}
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                    selectedCountries={this.state.selectedCountries}
                  />
                )}
              />
              <Route
                path="/tab2"
                render={() => (
                  <ChartsTab2
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                    selectedCountries={this.state.selectedCountries}
                  />
                )}
              />
              <Route
                path="/tab3"
                render={() => (
                  <ChartsTab3
                    countries={countries}
                    scenarioSelection={this.state}
                    closeWelcome={this.CloseWelcomeWidget}
                    selectedCountries={this.state.selectedCountriesCost}
                  />
                )}
              />
              
              <Route
                path="/about"
                render={() => {
                  return (
                    <PageRenderer markdownFiles={['descriptions/about.md']} />
                  )
                }}
              />
			  <Route
                path="/subscribe"
                render={() => {
                  return (
                    <PageRenderer markdownFiles={['descriptions/more.md']} />
                  )
                }}
              />
              <Route
                path="/scenarios"
                render={() => {
                  return (
                    <PageRenderer markdownFiles={['descriptions/scenarios.md']} />
                  )
                }}
              />
			  <Route
                path="/findings"
                render={() => {
                  return (
                    <PageRenderer markdownFiles={['descriptions/findings.md']} />
                  )
                }}
              />
              <Route
                path="/contact"
                render={() => {
                  return (
                    <PageRenderer markdownFiles={['descriptions/contact.md']} />
                  )
                }}
              />
            </MainSwitch>
          </Content>
        </RightColumn>
      </Page>
    )
  }
}

export default withRouter(App)


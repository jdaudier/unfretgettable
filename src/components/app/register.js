import React, { Component } from 'react';
import { auth } from '../../helpers/auth';
import Immutable from 'immutable';
import places from 'places.js';

const defaultState = {
	company: '',
	address: '',
	address2: '',
	city: '',
	administrative: '',
	postcode: '',
	capacity: '',
	availability: Immutable.List(),
	amenities: Immutable.List(),
	requireTaxReceipt: '',
	twitter: '',
	url: '',
	firstName: '',
	lastName: '',
	phone: '',
	email: '',
	generalEmail: '',
	pw: '',
	referral: '',
};

export default class Register extends Component {
	state = defaultState;
	componentDidMount() {
		const placesAutocomplete = places({
			container: this.address,
			type: 'address',
			templates: {
				value(suggestion) {
					return suggestion.name;
				}
			}
		});
		placesAutocomplete.on('change', e => {
			const {name, administrative, city, postcode} = e.suggestion;
			this.setState({
				address: name,
				city,
				administrative,
				postcode,
			});
		});
		placesAutocomplete.on('clear', () => {
			this.setState({
				address: '',
				address2: '',
				city: '',
				administrative: '',
				postcode: '',
			});
		});
	};
	onInputChange = (e) => {
		const {name, value} = e.target;
		const isChecked = e.target.checked;

		if (name === 'requireTaxReceipt') {
			if (value === 'yes') {
				return this.setState({
					[name]: true,
				});
			} else {
				return this.setState({
					[name]: false,
				});
			}
		}

		if (name === 'capacity') {
			return this.setState({
				[name]: Number(value),
			});
		}

		if (name === 'availability' || name === 'amenities') {
			if (isChecked) {
				return this.setState(prevState => {
					const originalList = prevState[name];
					const newList = originalList.push(value);
					return {[name]: newList}
				});
			}

			return this.setState(prevState => {
				const originalList = prevState[name];
				const newList = originalList.delete(originalList.indexOf(value));
				return {[name]: newList}
			});
		}

		this.setState({
			[name]: value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		auth(this.state);
	};
	handleReset = (e) => {
		e.preventDefault();
		this.setState(defaultState);
	};
	render () {
		const {
			company,
			address,
			address2,
			city,
			administrative,
			postcode,
			capacity,
			availability,
			amenities,
			requireTaxReceipt,
			twitter,
			url,
			firstName,
			lastName,
			phone,
			email,
			generalEmail,
			referral,
		} = this.state;

		return (
			<div>
				<h1>Add Your Space</h1>
				<form onSubmit={this.handleSubmit} onReset={this.handleReset}>
					<h2>Host Information</h2>
					<div>
						<label>Company Name
							<input type="text"
								   name="company"
								   value={company}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Company Address
							<input type="search"
								   name="address"
								   value={address}
								   placeholder="Search the address"
								   onChange={e => this.onInputChange(e)}
								   ref={(c) => this.address = c}
							/>
						</label>
					</div>
					<div>
						<label>Floor / Suite / Unit <em>(optional)</em>
							<input type="text"
								   name="address2"
								   value={address2}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>City
							<input type="text"
								   name="city"
								   value={city}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>State
							<input type="text"
								   name="administrative"
								   value={administrative}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Zip Code
							<input type="text"
								   name="postcode"
								   value={postcode}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Capacity
							<input type="number"
								   name="capacity"
								   value={capacity}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<p>Availability</p>
						<p>Select when your space is available on weeknights from 6 - 9pm</p>
						<label>
							<input name="availability"
								   value="mon"
								   type="checkbox"
								   checked={availability.includes('mon')}
								   onChange={e => this.onInputChange(e)}
							/>
							Mon
						</label>
						<label>
							<input name="availability"
								   value="tue"
								   type="checkbox"
								   checked={availability.includes('tue')}
								   onChange={e => this.onInputChange(e)}
							/>
							Tue
						</label>
						<label>
							<input name="availability"
								   value="wed"
								   type="checkbox"
								   checked={availability.includes('wed')}
								   onChange={e => this.onInputChange(e)}
							/>
							Wed
						</label>
						<label>
							<input name="availability"
								   value="thur"
								   type="checkbox"
								   checked={availability.includes('thur')}
								   onChange={e => this.onInputChange(e)}
							/>
							Thur
						</label>
						<label>
							<input name="availability"
								   value="fri"
								   type="checkbox"
								   checked={availability.includes('fri')}
								   onChange={e => this.onInputChange(e)}
							/>
							Fri
						</label>
						<p>Select when your space is available on weekends</p>
						<label>
							<input name="availability"
								   value="sat half"
								   type="checkbox"
								   checked={availability.includes('sat half')}
								   onChange={e => this.onInputChange(e)}
							/>
							Sat half day (10 am - 2pm)
						</label>
						<label>
							<input name="availability"
								   value="sat"
								   type="checkbox"
								   checked={availability.includes('sat')}
								   onChange={e => this.onInputChange(e)}
							/>
							Sat whole day (9 am - 5pm)
						</label>
						<label>
							<input name="availability"
								   value="sun half"
								   type="checkbox"
								   checked={availability.includes('sun half')}
								   onChange={e => this.onInputChange(e)}
							/>
							Sun half day (10 am - 2pm)
						</label>
						<label>
							<input name="availability"
								   value="sun"
								   type="checkbox"
								   checked={availability.includes('sun')}
								   onChange={e => this.onInputChange(e)}
							/>
							Sun whole day (9 am - 5pm)
						</label>
					</div>
					<div>
						<p>Amenities</p>
						<label>
							<input name="amenities"
								   value="wi-fi"
								   type="checkbox"
								   checked={amenities.includes('wi-fi')}
								   onChange={e => this.onInputChange(e)}
							/>
							Wi-Fi
						</label>
						<label>
							<input name="amenities"
								   value="projector"
								   type="checkbox"
								   checked={amenities.includes('projector')}
								   onChange={e => this.onInputChange(e)}
							/>
							Projector / Screen
						</label>
						<label>
							<input name="amenities"
								   value="microphone"
								   type="checkbox"
								   checked={amenities.includes('microphone')}
								   onChange={e => this.onInputChange(e)}
							/>
							Microphone
						</label>
						<label>
							<input name="amenities"
								   value="power strips"
								   type="checkbox"
								   checked={amenities.includes('power strips')}
								   onChange={e => this.onInputChange(e)}
							/>
							Power Strips
						</label>
						<label>
							<input name="amenities"
								   value="chairs"
								   type="checkbox"
								   checked={amenities.includes('chairs')}
								   onChange={e => this.onInputChange(e)}
							/>
							Chairs
						</label>
						<label>
							<input name="amenities"
								   value="tables"
								   type="checkbox"
								   checked={amenities.includes('tables')}
								   onChange={e => this.onInputChange(e)}
							/>
							Tables
						</label>
						<label>
							<input name="amenities"
								   value="whiteboard"
								   type="checkbox"
								   checked={amenities.includes('whiteboard')}
								   onChange={e => this.onInputChange(e)}
							/>
							Whiteboard
						</label>
						<label>
							<input name="amenities"
								   value="flip chart"
								   type="checkbox"
								   checked={amenities.includes('flip chart')}
								   onChange={e => this.onInputChange(e)}
							/>
							Flip Chart
						</label>
						<label>
							<input name="amenities"
								   value="water"
								   type="checkbox"
								   checked={amenities.includes('water')}
								   onChange={e => this.onInputChange(e)}
							/>
							Water
						</label>
						<label>
							<input name="amenities"
								   value="beverages"
								   type="checkbox"
								   checked={amenities.includes('beverages')}
								   onChange={e => this.onInputChange(e)}
							/>
							Beverages
						</label>
						<label>
							<input name="amenities"
								   value="snacks"
								   type="checkbox"
								   checked={amenities.includes('snacks')}
								   onChange={e => this.onInputChange(e)}
							/>
							Snacks
						</label>
						<label>
							<input name="amenities"
								   value="meals"
								   type="checkbox"
								   checked={amenities.includes('meals')}
								   onChange={e => this.onInputChange(e)}
							/>
							Meals (Dinner / Lunch)
						</label>
					</div>
					<div>
						<p>Will a tax exempt receipt be required?</p>
						<label>
							<input name="requireTaxReceipt"
								   type="radio"
								   value="yes"
								   checked={requireTaxReceipt === true}
								   onChange={e => this.onInputChange(e)}
							/>
							Yes
						</label>
						<label>
							<input name="requireTaxReceipt"
								   type="radio"
								   value="no"
								   checked={requireTaxReceipt === false}
								   onChange={e => this.onInputChange(e)}
							/>
							No
						</label>
					</div>
					<div>
						<label>Twitter
							<div>For social media recognition</div>
							<input name="twitter"
								   type="text"
								   value={twitter}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Website
							<div>Including http:// or https://</div>
							<input name="url"
								   type="url"
								   value={url}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<h2>Point of Contact</h2>
					<p>Who is the best person to connect with to coordinate events on-site?</p>
						<div>
						<label>First Name
							<input name="firstName"
								   type="text"
								   value={firstName}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Last Name
							<input name="lastName"
								   type="text"
								   value={lastName}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Phone Number
							<input name="phone"
								   type="tel"
								   value={phone}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Email
							<div>Venue requests will be sent to this email address, and you'll use this to log in</div>
							<input name="email"
								   type="email"
								   value={email}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>General Email
							<div>Back-up email in case you're no longer at the company</div>
							<input name="generalEmail"
								   type="email"
								   value={generalEmail}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>Password
							<div>6 or more characters</div>
							<input name="pw"
								   type="password"
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<div>
						<label>How did you hear about us?
							<input name="referral"
								   type="text"
								   value={referral}
								   onChange={e => this.onInputChange(e)}
							/>
						</label>
					</div>
					<button type="reset">Reset</button>
					<button type="submit">Register</button>
				</form>
			</div>
		)
	}
}

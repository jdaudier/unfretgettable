import React, { Component } from 'react';
import QuestionTemplate from '../templates/question';

import notes from '../notes'

export default class Home extends Component {
  render () {
    return (
      <div>
		  {notes.map((note, i) => <QuestionTemplate key={i} notes={note} />)}
	  </div>
    )
  }
}

import React, { Component } from 'react';
import './index.css'

class PhrasalVerb extends Component {
  state = {
    meaning: '',
    example: '',
    options: ['one', 'two', 'three']
  }

  render() {
    return (
      <div className="PhrasalVerb container">
        <h2>Phrasal Verb, Abril 25</h2>
        <p>Today's phrasal verb means: "to know what is happening in the news</p>
        <p className="text-muted">When I was living abroad I found it difficult to keep ........ with the news as I didn't speak the language.</p>

        <div className="row container-options gy-2 my-4">
          <div className="col-12">
            <input type="radio" className="btn-check" name="options" id="option1" autoComplete="off" />
            <label className="btn btn-outline-dark options w-100" htmlFor="option1">Opcao 1</label>
          </div>
          <div className="col-12">
            <input type="radio" className="btn-check" name="options" id="option2" autoComplete="off" />
            <label className="btn btn-outline-dark options w-100" htmlFor="option2">Opcao 2</label>
          </div>
          <div className="col-12">
            <input type="radio" className="btn-check" name="options" id="option3" autoComplete="off" />
            <label className="btn btn-outline-dark options w-100" htmlFor="option3">Opcao 2</label>
          </div>
        </div>

        <button className="btn btn-primary w-100 py-2" disabled>Responder</button>
      </div>
    );
  }
}

export default PhrasalVerb;
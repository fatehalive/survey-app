import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actionTypes, selectors } from '../../store/counter'

const Counter: React.FC = () => {
  const count = useSelector(selectors.getCountValue)
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Timer</span>
              <h4>
                Timer: <strong>{count}</strong> minute
              </h4>
              <p>Here you can set timer quiz value in minute.</p>
            </div>
            <div className="card-action">
              <div className="group">
                <button
                  className="waves-effect waves-teal btn-flat red"
                  type="button"
                  data-qa="decrement-counter"
                  onClick={() =>
                    dispatch({ type: actionTypes.DECREMENT_COUNTER })
                  }
                >
                  decrement
                </button>
                <button
                  className="waves-effect waves-teal btn-flat blue"
                  type="button"
                  data-qa="increment-counter"
                  onClick={() =>
                    dispatch({ type: actionTypes.INCREMENT_COUNTER })
                  }
                >
                  increment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Counter

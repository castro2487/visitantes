import React from 'react';

const RenderInputField = ({   name,
                              input,
                              label,
                              type,
                              maxLength,
                              disabled,
                              meta: { touched, error }
                          }) => (
    (disabled)?
        <div className="input-field">
            <input {...input} type={type}
                   className="valid"  maxLength={maxLength} disabled="true"/>
            <label htmlFor={name} className="active">{label}</label>
            <span className="lever"></span>
        </div>
    :
    (touched)? ((error)?
        <div className="input-field">
            <input {...input} type={type}
                   className="invalid" maxLength={maxLength}/>
            <label style={{width:'700px'}} htmlFor={name} data-error={error}>{label}</label>
            <span className="lever"></span>
        </div>
        : <div className="input-field">
            <input {...input} type={type}
                   className="valid"  maxLength={maxLength}/>
            <label htmlFor={name}>{label}</label>
            <span className="lever"></span>
        </div>)
        : <div className="input-field">
            <input {...input} type={type}
                   className="validate"  maxLength={maxLength}/>
            <label htmlFor={name}>{label}</label>
            <span className="lever"></span>
        </div>

);

export {RenderInputField};
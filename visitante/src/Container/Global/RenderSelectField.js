import React from 'react';


const RenderSelectField = ({   name,
                              input,
                              label,
                              items,
                              disabled,
                              selected,
                              meta: { touched, error }
                          }) => (
    (disabled!==undefined && disabled)?
        <div className="input-field">
            <select  {...input}  className="browser-default valid" disabled>
                <option value={items.length===0?'empty':''} > {selected} </option>
                { items.map(item => { return <option value={item} key={item}>{item}</option>}) }
            </select>
            <label htmlFor={name} className="active">{label}</label>
            <span className="lever"></span>
        </div>
    : (touched)? ((error)?
        <div className="input-field">
            <select {...input} className="browser-default invalid select-wrapper">
                <option value={items.length===0?'empty':''} > {selected} </option>
                { items.map((item) => { return <option value={item} key={item}>{item}</option>}) }
            </select>
            <label style={{display: 'inline-block', verticalAlign: 'bottom'}}
                   htmlFor={name} data-error={error} className="active">{label}</label>
            <span className="lever"></span>
        </div>
        :
        <div className="input-field">
            <select  {...input}  className="browser-default valid">
                <option value={items.length===0?'empty':''} > {selected} </option>
                { items.map(item => { return <option value={item} key={item}>{item}</option>}) }
            </select>
            <label htmlFor={name}>{label}</label>
            <span className="lever"></span>
        </div>)
        : <div className="input-field">
            <select  {...input}  className="browser-default validate">
                <option value={items.length===0?'empty':''} > {selected} </option>
                { items.map(item => { return <option value={item} key={item}>{item}</option>}) }
            </select>
            <label htmlFor={name}>{label}</label>
            <span className="lever"></span>
        </div>

);

export {RenderSelectField};
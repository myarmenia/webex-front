import React from 'react';

function Alert() {

  return (
    <div className="alert">
      <div className="mr-10px">
        <i className="fontSize fa fa-exclamation-triangle"></i>
      </div>
      <div>
        Configure user passwords to expire periodically. Users will need warning that their passwords are going to expire,
        or they might inadvertently get locked out of the system!
      </div>
    </div>
  );
}

export default function CustomStyles() {
  return (
    <Alert />
  );
}
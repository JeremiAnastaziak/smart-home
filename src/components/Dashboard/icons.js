import React from 'react';
import IconButton from 'material-ui/IconButton';

const renderIcons = (device) => {
    return (
        <div style={{height: '56px', marginBottom: '10px'}}>
        {device.alarm && device.alarm.frost && <IconButton className="tooltip-container" tooltip=" Alarm zamrozeniowy "><svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="40px" height="40px" viewBox="0 0 48 48" enable-background="new 0 0 48 48">
   <path fill="#90CAF9" d="M6,10.001C10,10,10,34,12,34s3-22,6-22s5,30,7,30s4-29,7-29s3,12,5,12s2-14.999,5-14.999
       C40,10,10,10,6,10.001z"/>
   <rect x="6" y="6" fill="#DD2C00" width="36" height="4"/>
   <g>
       <path fill="#2196F3" d="M25,10.002V42c2,0,4-29,7-29v-2.999C29.806,10.001,27.417,10.001,25,10.002z"/>
       <path fill="#2196F3" d="M42,10.001c-0.512,0-2.369,0-5,0V25C39,25,39,10.001,42,10.001z"/>
       <path fill="#2196F3" d="M18,10.002c-2.719,0-5.305,0-6,0V34c2,0,3-22,6-22V10.002z"/>
   </g>
   </svg></IconButton>}
   {device.alarm && device.alarm.fire &&
   <IconButton className="tooltip-container" tooltip=" Alarm pozarowy "> <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px"
        viewBox="0 0 48 48" enable-background="new 0 0 48 48">
   <path fill="#F44336" d="M10,42h28c2.2,0,4-1.8,4-4V15.7c0-1.6-1-3.1-2.6-3.7L24,6L8.6,12C7,12.6,6,14.1,6,15.7V38
       C6,40.2,7.8,42,10,42z"/>
   <path fill="#FFC107" d="M30.6,19.6c0,0.2-0.6,3.8-2.4,5.4c2.4-7.7-4.2-12-4.2-12s-1,5.7-3,7.8c-0.1-2.5-1.5-4-1.5-4
       c-1,4.4-4.5,8.3-4.5,11.1c0,5,4,9,9,9s9-4,9-9C33,24.4,32,21.8,30.6,19.6z"/>
   <path fill="#FFF9C4" d="M27,32.5c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.7,3-7.5,3-7.5S27,30.8,27,32.5z"/>
   </svg></IconButton>
   }
   {device.alarm && device.alarm.burglary && <IconButton className="tooltip-container" tooltip=" Alarm włamaniowy "> <svg version="1.1"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40px" height="40px"
	 viewBox="0 0 48 48" enable-background="new 0 0 48 48">
<polygon fill="#FF9800" points="24,37 19,33 19,25 29,25 29,33 "/>
<g>
	<circle fill="#FFA726" cx="33" cy="19" r="2"/>
	<circle fill="#FFA726" cx="15" cy="19" r="2"/>
</g>
<path fill="#FFB74D" d="M33,13c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,5,4,9,9,9s9-4,9-9C33,18.9,33,14.1,33,13z"/>
<path fill="#FF5722" d="M24,4c-6.1,0-10,4.9-10,11c0,0.8,0,2.3,0,2.3l2,1.7v-5l12-4l4,4v5l2-1.7c0,0,0-1.5,0-2.3c0-4-1-8-6-9l-1-2
	H24z"/>
<g>
	<circle fill="#784719" cx="28" cy="19" r="1"/>
	<circle fill="#784719" cx="20" cy="19" r="1"/>
</g>
<g>
	<path fill="#546E7A" d="M29,31L29,31c0,0-1.5,3-5,3s-5-3-5-3S8,33,8,44h32C40,33,29,31,29,31z"/>
</g>
<path fill="#37474F" d="M24,17c-4,0-10-1-10-1v1.3c0,0,3,5.7,5.5,5.7H20c1.2,0,2.2-0.6,2.9-1.5l0,0c0.5-0.7,1.6-0.7,2.2,0l0,0
	c0.7,0.9,1.8,1.5,2.9,1.5h0.5c2.5,0,5.5-5.7,5.5-5.7V16C34,16,28,17,24,17z M21.7,19c0,1.5-0.5,2-1.8,2h-0.3c-1,0-1.9-0.7-2.3-1.6
	c-0.2-0.7,0.3-1.4,1-1.4L21.7,19z M30.5,19.4c-0.3,1-1.2,1.6-2.3,1.6H28c-1.3,0-1.8-0.5-1.8-2l3.3-1C30.3,18,30.8,18.7,30.5,19.4z"
	/>
</svg></IconButton>}
   {(!device.alarm || (!device.alarm.frost && !device.alarm.fire && !device.alarm.burglary)) && <span style={{lineHeight: '56px'}}>Brak alarmów</span>}
   </div>
    )
}

export default renderIcons;

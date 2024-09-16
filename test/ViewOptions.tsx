import React from 'react';

type ViewOptionsProps = {
  renderHourMarks: boolean;
  renderMinuteHand: boolean;
  renderMinuteMarks: boolean;
  renderNumbers: boolean;
  renderSecondHand: boolean;
  useMillisecondPrecision: boolean;
  use24HourFormat: boolean;
  setRenderHourMarks: (value: boolean) => void;
  setRenderMinuteHand: (value: boolean) => void;
  setRenderMinuteMarks: (value: boolean) => void;
  setRenderNumbers: (value: boolean) => void;
  setRenderSecondHand: (value: boolean) => void;
  setUseMillisecondPrecision: (value: boolean) => void;
  setUse24HourFormat: (value: boolean) => void;
};

export default function ViewOptions({
  renderHourMarks,
  renderMinuteHand,
  renderMinuteMarks,
  renderNumbers,
  renderSecondHand,
  useMillisecondPrecision,
  use24HourFormat,
  setRenderHourMarks,
  setRenderMinuteHand,
  setRenderMinuteMarks,
  setRenderNumbers,
  setRenderSecondHand,
  setUseMillisecondPrecision,
  setUse24HourFormat,
}: ViewOptionsProps) {
  return (
    <fieldset>
      <legend>View options</legend>

      <div>
        <input
          checked={renderHourMarks}
          id="renderHourMarks"
          onChange={(event) => setRenderHourMarks(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="renderHourMarks">Show hour marks</label>
      </div>

      <div>
        <input
          checked={renderNumbers}
          id="renderNumbers"
          onChange={(event) => setRenderNumbers(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="renderNumbers">Show numbers</label>
      </div>

      <div>
        <input
          checked={renderMinuteHand}
          id="renderMinuteHand"
          onChange={(event) => setRenderMinuteHand(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="renderMinuteHand">Show minute hand</label>
      </div>

      <div>
        <input
          checked={renderMinuteMarks}
          id="renderMinuteMarks"
          onChange={(event) => setRenderMinuteMarks(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="renderMinuteMarks">Show minute marks</label>
      </div>

      <div>
        <input
          checked={renderSecondHand}
          id="renderSecondHand"
          onChange={(event) => setRenderSecondHand(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="renderSecondHand">Show second hand</label>
      </div>

      <div>
        <input
          checked={useMillisecondPrecision}
          id="useMillisecondPrecision"
          onChange={(event) => setUseMillisecondPrecision(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="useMillisecondPrecision">Use millisecond precision</label>
      </div>

      <div>
        <input
          checked={use24HourFormat}
          id="use24HourFormat"
          onChange={(event) => setUse24HourFormat(event.target.checked)}
          type="checkbox"
        />
        <label htmlFor="use24HourFormat">Use 24-hour format</label>
      </div>
    </fieldset>
  );
}

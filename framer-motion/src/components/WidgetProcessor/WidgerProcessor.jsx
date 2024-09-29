import { LayoutGroup, motion } from "framer-motion";
import PropTypes from "prop-types";
function WidgetProcessor({ widgets, processWidget }) {
  const unprocessedWidgets = widgets.filter(
    (widget) => widget.status === "unprocessed"
  );
  const processedWidgets = widgets.filter(
    (widget) => widget.status === "processed"
  );

  return (
    <LayoutGroup>
      <div className="wrapper">
        <div className="inbox">
          {unprocessedWidgets.map((widget) => {
            return (
              <motion.button
                layoutId={widget.id}
                key={widget.id}
                className="widget"
                onClick={() => processWidget(widget.id, "processed")}
              />
            );
          })}
        </div>

        <div className="outbox">
          {processedWidgets.map((widget) => {
            return (
              <motion.button
                layoutId={widget.id}
                key={widget.id}
                className="widget"
                onClick={() => processWidget(widget.id, "unprocessed")}
              />
            );
          })}
        </div>
      </div>
    </LayoutGroup>
  );
}
WidgetProcessor.propTypes = {
  widgets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
    })
  ).isRequired,
  processWidget: PropTypes.any,
};

export default WidgetProcessor;

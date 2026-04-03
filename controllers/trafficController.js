exports.getTraffic = (req, res) => {
  res.json({
    congestionLevel: "Moderate",
    roadCondition: "Clear",
    avgSpeed: "45 km/h"
  });
};
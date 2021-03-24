// CHART IP PER SEMESTER

window.onload = function () {

    var chart1 = new CanvasJS.Chart("chart-ip-semester", {
        animationEnabled: true,
        theme: "light2",

        axisX: {
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "Indeks Penilaian (IP)",
            includeZero: true,
            crosshair: {
                enabled: true
            }
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor: "pointer",
            verticalAlign: "bottom",
            horizontalAlign: "left",
            dockInsidePlotArea: true,
            itemclick: toogleDataSeries
        },
        data: [{
            type: "line",
            showInLegend: true,
            name: "IP",
            markerType: "square",
            xValueFormatString: "DD MMM, YYYY",
            color: "#F08080",
            dataPoints: [
                { label: "Semester 1", y: 3.00 },
                { label: "Semester 2", y: 2.94 },
                { label: "Semester 3", y: 3.25 }
            ]
        },
        {
            type: "line",
            showInLegend: true,
            name: "Rata-rata IP seluruh mahasiswa",
            lineDashType: "dash",
            dataPoints: [
                { label: "Semester 1", y: 2.57 },
                { label: "Semester 2", y: 3.54 },
                { label: "Semester 3", y: 3.11 }
            ]
        }]
    });
    chart1.render();

    function toogleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart1.render();
    }



    // CHART NILAI TUGAS PER PERTEMUAN ----------------------

    var chart2 = new CanvasJS.Chart("chart-assignment-result", {
        theme: "light2",
        animationEnabled: true,
        axisY: {
            title: "Nilai"
        },
        toolTip: {
            shared: "true"
        },
        legend: {
            cursor: "pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "spline",
            showInLegend: true,
            
            name: "BTI",
            dataPoints: [
                { label: "Pertemuan 2", y: 90 },
                { label: "Pertemuan 3", y: 86 },
                { label: "Pertemuan 4", y: 94 },
                { label: "Pertemuan 6", y: 86 },
                { label: "Pertemuan 7", y: 89 }
            ]
        },
        {
            type: "spline",
            showInLegend: true,
            
            name: "Sistem Operasi",
            dataPoints: [
                { label: "Pertemuan 1", y: 88 },
                { label: "Pertemuan 2", y: 87 },
                { label: "Pertemuan 3", y: 90 },
                { label: "Pertemuan 4", y: 94 },
                { label: "Pertemuan 5", y: 92 },
                { label: "Pertemuan 6", y: 84 },
                { label: "Pertemuan 7", y: 86 }
            ]
        },
        {
            type: "spline",
            showInLegend: true,
            
            name: "PBO",
            dataPoints: [
                { label: "Pertemuan 3", y: 90 },
                { label: "Pertemuan 4", y: 91 },
                { label: "Pertemuan 6", y: 89 }
            ]
        },
        {
            type: "spline",
            showInLegend: true,
            
            name: "Pemrograman Web",
            dataPoints: [
                { label: "Pertemuan 3", y: 90 },
                { label: "Pertemuan 4", y: 83 },
                { label: "Pertemuan 5", y: 88 },
                { label: "Pertemuan 7", y: 92 }
            ]
        },
        {
            type: "spline",
            showInLegend: true,
            
            name: "KPL",
            dataPoints: [
                { label: "Pertemuan 1", y: 92 },
                { label: "Pertemuan 5", y: 90 },
                { label: "Pertemuan 6", y: 91 }
            ]
        },
        {
            type: "spline",
            showInLegend: true,
            
            name: "Teknologi Basis Data",
            dataPoints: [
                { label: "Pertemuan 2", y: 89 },
                { label: "Pertemuan 3", y: 90 },
                { label: "Pertemuan 4", y: 91 },
                { label: "Pertemuan 5", y: 92 },
                { label: "Pertemuan 6", y: 85 }
            ]
        },
        {
            type: "spline",
            showInLegend: true,
            
            name: "Jaringan Komputer",
            dataPoints: [
                { label: "Pertemuan 1", y: 85 },
                { label: "Pertemuan 2", y: 89 },
                { label: "Pertemuan 3", y: 84 },
                { label: "Pertemuan 4", y: 86 },
                { label: "Pertemuan 5", y: 90 },
                { label: "Pertemuan 6", y: 90 }
            ]
        }]
    });
    chart2.render();



    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        } else {
            e.dataSeries.visible = true;
        }
        chart2.render();
    }
    
    

}


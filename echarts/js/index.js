// jq入口函数
$(function () {
    //设备异常tab栏切换
    $('.dev-monitor a').click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        if ($(this).text() == "异常设备监控") {
            $('.dev-monitor .time').text('异常时间');
        }
    });

    //异常设备无限轮播
    function gundong() {
        $('.dev-monitor .content').animate({ top: -60 }, 3000, 'linear', function () {
            $('.dev-monitor .content').css('top', 0);
            //递归实现无限轮播
            gundong();
        });
    };
    gundong();

    //一段时间内的订单量与销售额切换
    var sales_info = [{
        order: 145,
        money: 233
    }, {
        order: 33,
        money: 245
    }, {
        order: 35,
        money: 36
    }, {
        order: 57,
        money: 1345
    }];
    //显示迭代，填入数据
    $(".order-count .filter a").click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        let index = $(this).index();
        $(".order-count h3").eq(0).text(sales_info[index].order);
        $(".order-count h3").eq(1).text(sales_info[index].money);
    });


    //全国热卖排行榜头部城市销量切换
    var top_product = [{ name: "营养快线", growth: 9.9 },
    { name: "养乐多", growth: 5.6 },
    { name: "旺仔牛奶", growth: 1.7 },
    { name: "果粒橙", growth: 2.3 },
    { name: "乌苏啤酒", growth: 1.6 },
    { name: "茶π", growth: 3.9 },]

    $('.top-city li').mouseenter(function () {
        $(this).addClass('current').siblings().removeClass('current');
        //不同城市的销量排名也要产生变化，用数组模拟变化，每次变动都把数组最后一位拿到前面
        $('.right-detail .sales-growth').empty();
        top_product.unshift(top_product.pop());
        for (let i = 0; i < top_product.length; i++) {
            $('.right-detail .sales-growth').append(`
            <li>
                                    <span>${top_product[i].name}</span>
                                    <del class="icon-up" style="color: #d93f36;"></del>
                                    <b>${top_product[i].growth}</b>
                                </li>
        `);
        };

    });
});

//饼图入口函数
$(function () {
    var myChart = echarts.init($('.pie-chart')[0]);
    option = {
        backgroundColor: 'rgba(0,0,0,0)',
        color: ['#003366', '#006699', '#4cabce', '#e5323e'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        visualMap: {
            show: false,
            //不同扇区色差 
            min: 600,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                //半径模式
                radius: [20, 65],
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: '湖北' },
                    { value: 310, name: '四川' },
                    { value: 274, name: '河北' },
                    { value: 235, name: '江苏 ' },
                    { value: 235, name: '四川 ' },
                    { value: 235, name: '山东 ' },
                    { value: 235, name: '北京 ' },
                    { value: 400, name: '云南 ' }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    // color: 'rgba(255, 255, 255, 0.6)'
                },
                labelLine: {
                    // lineStyle: {
                    //     color: 'rgba(255, 255, 255, 0.3)'
                    // },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                // itemStyle: {

                //     shadowBlur: 200,
                //     shadowColor: 'rgba(0, 0, 0, 0)'
                // },

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

//柱形图入口函数
$(function () {
    var myChart = echarts.init($('.col-chart')[0]);
    var otheritem = {
        value: 1000,
        itemStyle: {
            color: '#ccc',
            opacity: .5
        }
    }

    option = {

        color: new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                { offset: 0, color: '#83bff6' },
                { offset: 1, color: '#188df0' }
            ]
        ),
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效

                type: 'none'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['上海', '', '北京', '', '合肥', '', '...', '', '杭州', '', '济南', '', '重庆'],
                axisTick: {
                    show: false,
                },
                axisLine: {

                    lineStyle: {
                        color: '#188df0',
                    }
                }
            }
        ],
        yAxis: [
            {

                type: 'value',
                axisLine: {

                    lineStyle: {
                        color: '#188df0',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#188df0',
                    }
                }
            },
            {
                //右边y轴
                //坐标轴轴线
                axisLine: {
                    lineStyle: {
                        color: '#0078d4'
                    }
                }
            }
        ],
        series: [
            {
                name: '全国用户总量统计',
                type: 'bar',
                barWidth: '60%',
                data: [2110, 1920, 1920, 1920, 1920, otheritem, otheritem, otheritem, 1690, 1520, 1390, 1110, 1020]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

});

//折线图入口函数
$(function () {
    var myChart = echarts.init($('.line-chart')[0]);
    var dataarr = [
        [
            [2014, 2015, 2016, 2017, 2018, 2019],
            [240, 400, 1010, 1340, 900, 2300],
            [400, 640, 1910, 3240, 2900, 3300]
        ],
        [
            [1, 2, 3, 4],
            [123, 175, 112, 197],
            [143, 131, 165, 123]
        ],
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            [36, 29, 36, 23, 75, 12, 97, 21, 67, 98, 12, 97],
            [54, 12, 12, 43, 31, 65, 23, 78, 21, 82, 65, 23]
        ],
        [
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
            [4, 3, 6, 5, 9, 5, 8, 4, 8, 4, 5, 3, 14, 11, 14, 14, 13, 16],
            [3, 4, 3, 8, 3, 4, 6, 6, 9, 5, 5, 4, 7, 12, 15, 12, 18, 13]
        ]
    ];
    var option = {
        title: {
            textStyle: {
                color: '#3370bc'
            },
            text: '单位:万',
            top: 10
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            textStyle: {
                color: '#3370bc'
            },
            data: ['预期额度', '实际额度'],
            right: 0,
            top: 10
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: '#0078d4',
                }
            },
            type: 'category',
            boundaryGap: false,
            data: dataarr[0][0]
        },
        yAxis: {
            axisLine: {
                lineStyle: {
                    color: '#0078d4',
                }
            },
            type: 'value',
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [
            {
                smooth: true,
                name: '预期额度',
                type: 'line',
                data: dataarr[0][1],
            },
            {
                color: "#0f0",
                smooth: true,
                name: '实际额度',
                type: 'line',
                data: dataarr[0][2],

            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    //销售额统计（年月季）切换
    let flag = 0;
    $(".sales-count .filter a").click(function () {
        $(this).addClass('current').siblings().removeClass('current');
        //切换echart折线图图表里的数据
        option.xAxis.data = dataarr[$(this).index() - 1][0];
        option.series[0].data = dataarr[$(this).index() - 1][1];
        option.series[1].data = dataarr[$(this).index() - 1][2];
        myChart.setOption(option);
    });
    setInterval(function () {
        if (flag >= 4) {
            flag = 0;
        }
        $(".sales-count .filter a").eq(flag).click();
        flag++;
    }, 3000);
});

//环形图入口函数
$(function () {
    var myChart = echarts.init($('.circuit-chart')[0]);

    option = {
        series: [
            {
                startAngle: 180,
                name: '来源',
                type: 'pie',
                radius: ['80%', '120%'],
                center: ['50%', '63%'],
                avoidLabelOverlap: true,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 150, name: '已完成 ' },
                    { value: 50, name: '未完成 ' },
                    { value: 200, name: 'null', itemStyle: { color: 'transparent' } }
                ],
                hoverAnimation: false
            }
        ]
    };


    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});

//ditu
$(function () {
    var myChart = echarts.init($('.map-chart')[0]);

    option = {
        title: {
            top: 10,
            // text: '平面图地图3D效果，整体地图渐变色，并且两层同步拖拽',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        backgroundColor: 'rgba(0, 10, 52, 1)',
        geo: {
            map: 'china',
            aspectScale: 0.75,
            layoutCenter: ["50%", "51.5%"], //地图位置
            layoutSize: '118%',
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 1)',
                    borderWidth: 0.5,
                    color: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 1500,
                        x2: 2500,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#009DA1' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#005B9E' // 50% 处的颜色
                        }],
                        global: true // 缺省为 false
                    },
                    opacity: 0.5,
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            },
            regions: [{
                name: '南海诸岛',
                itemStyle: {
                    areaColor: 'rgba(0, 10, 52, 1)',
                    borderColor: 'rgba(0, 10, 52, 1)'
                },
                emphasis: {
                    areaColor: 'rgba(0, 10, 52, 1)',
                    borderColor: 'rgba(0, 10, 52, 1)'
                }
            }],
            z: 2
        },
        series: [{
            type: 'map',
            map: 'china',
            tooltip: {
                show: false
            },
            label: {
                show: true,
                color: '#FFFFFF',
                fontSize: 16
            },
            aspectScale: 0.75,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '118%',
            roam: true,
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, 0.6)',
                    borderWidth: 0.8,
                    areaColor: {
                        type: 'linear-gradient',
                        x: 0,
                        y: 1200,
                        x2: 1000,
                        y2: 0,
                        colorStops: [{
                            offset: 0,
                            color: '#009DA1' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#005B9E' // 50% 处的颜色
                        }],
                        global: true // 缺省为 false
                    },
                },
                emphasis: {
                    areaColor: 'rgba(147, 235, 248, 0)'
                }
            },
            zlevel: 1
        }]
    };

    //echarts 设置地图外边框以及多个geo实现缩放拖曳同步
    myChart.on('georoam', function (params) {
        var option = myChart.getOption(); //获得option对象
        if (params.zoom != null && params.zoom != undefined) { //捕捉到缩放时
            option.geo[0].zoom = option.series[0].zoom; //下层geo的缩放等级跟着上层的geo一起改变
            option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
        } else { //捕捉到拖曳时
            option.geo[0].center = option.series[0].center; //下层的geo的中心位置随着上层geo一起改变
        }
        myChart.setOption(option); //设置option
    });

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
});
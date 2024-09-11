(function($) {
    
    // Definición de la función principal del deslizador
    var slide = function(ele, options) {
        var $ele = $(ele);
        
        // Configuración inicial de las opciones del deslizador
        var setting = {
            speed: 1000,
            interval: 2000,
        };
        
        // Extensión de las opciones pasadas al objeto de configuración
        $.extend(true, setting, options);
        
        // Array de estados para cada imagen en el deslizador
        var states = [
            { zIndex: 1, width: 120, height: 150, top: 69, left: 134, opacity: 0.2 },
            { zIndex: 2, width: 130, height: 170, top: 59, left: 0, opacity: 0.4 },
            { zIndex: 3, width: 170, height: 218, top: 35, left: 110, opacity: 0.7 },
            { zIndex: 4, width: 224, height: 288, top: 0, left: 263, opacity: 1 },
            { zIndex: 3, width: 170, height: 218, top: 35, left: 470, opacity: 0.7 },
            { zIndex: 2, width: 130, height: 170, top: 59, left: 620, opacity: 0.4 },
            { zIndex: 1, width: 120, height: 150, top: 69, left: 500, opacity: 0.2 }
        ];

        // Selección de los elementos li dentro del contenedor
        var $lis = $ele.find('li');
        var timer = null;

        // Eventos para navegación manual
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });

        // Eventos para manejo de entrada y salida del mouse
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        // Inicialización del movimiento y autoplay
        move();
        autoPlay();

        // Función para mover las imágenes según los estados definidos
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.opacity);
            });
        }

        // Función para actualizar el estado del deslizador
        function next() {
            states.unshift(states.pop());
            move();
        }

        // Función para iniciar o reanudar el autoplay
        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    };

    // Método jQuery extendido para usar el deslizador en múltiples elementos
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele, options);
        });
        return this;
    }
})(jQuery);

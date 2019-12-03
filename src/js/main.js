(function($) {
    "use strict"
    $(function() {

        function startAnimationBlocks() {
            var blockItems = $('.is--animate-block')
            blockItems.each(function() {
                var thisBlock = $(this)
                var thisAnim = $(this).data('animname')
                var thisDelay = $(this).data('animdelay')

                if($(this).visible(true) && !$(this).hasClass('is--finish')) {
                    thisBlock
                        .addClass('animated')
                        .addClass(thisAnim)
                        .css({
                            "-webkit-animation-delay": thisDelay + 's',
                            "-moz-animation-delay": thisDelay + 's',
                            "-o-animation-delay": thisDelay + 's',
                            "animation-delay": thisDelay + 's'
                        })
                }
            })

            var blocksTextBg = $('.__dd__bg-text')

            blocksTextBg.each(function() {

                var thisBlock = $(this)

                if($(this).visible(true) && !$(this).hasClass('__dd__is--show')) {
                    thisBlock
                        .addClass('__dd__is--show')
                }
            })
        }

        $('.anchor').on('click', function(e) {
            e.preventDefault();
            var _this = $(this)
            var aid = _this.attr("href");
            if(!aid) {
                aid = _this.data('target')
            }
            $('html,body').animate({scrollTop: $(aid).offset().top},'slow');
        })

        startAnimationBlocks()

        $(document).scroll(function() {
            startAnimationBlocks()
        })

    })
})(jQuery);
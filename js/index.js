    document.addEventListener('DOMContentLoaded', function() {
    const showBlocksButton = document.getElementById('go-button');
    const blocks = document.querySelectorAll('.code-block2');
    let blockIndex = 0; 
    let isShowing = false;
  
    showBlocksButton.addEventListener('click', function() {
        if (!isShowing) {
            showBlocksButton.textContent = "Скрыть блоки";
            isShowing = true;
            showNextBlock();
        }
        else {
          hideAllBlocks();
          showBlocksButton.textContent = "Показать блоки";
          isShowing = false;
        }
    });
  
    function showNextBlock() {
        if (blockIndex < blocks.length) {
            blocks[blockIndex].classList.add('show');
            blockIndex++;
            if(blockIndex < blocks.length){
              setTimeout(showNextBlock, 300);  
            }
        }
    }
  
    function hideAllBlocks() {
          blocks.forEach(block => {
              block.classList.remove('show');
          });
          blockIndex = 0;
    }
  
  });
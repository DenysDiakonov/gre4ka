package grechka.proj.kvinz.controller.error_handler;

import grechka.proj.kvinz.controller.error_handler.custom_errors.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class RestResponseEntityExceptionHandler extends ResponseEntityExceptionHandler{

    @ExceptionHandler({ResourceNotFoundException.class})
    public ResponseEntity<CustomErrorResponce> handleNotFoundException(ResourceNotFoundException exception){

        return new ResponseEntity<>(new CustomErrorResponce(exception.getMessage()),HttpStatus.NOT_FOUND);
    }
}
